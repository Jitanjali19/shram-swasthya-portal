"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const repository_1 = require("./repository");
const repository_2 = require("../auth/repository");
const enums_1 = require("../../common/enums");
const AppError_1 = require("../../common/errors/AppError");
const superAdminRepo = new repository_1.SuperAdminRepository();
const authRepo = new repository_2.AuthRepository();
class SuperAdminService {
    async createAdmin(data, superAdminId) {
        // Check if email exists
        const existingUser = await authRepo.findUserByEmail(data.email);
        if (existingUser) {
            throw new AppError_1.AppError('User with this email already exists', 409);
        }
        // Create user
        const hashedPassword = await bcryptjs_1.default.hash('defaultPassword123', 10); // TODO: generate proper password
        const user = await authRepo.createUser({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            passwordHash: hashedPassword,
            role: enums_1.UserRole.ADMIN,
        });
        // Create admin
        const admin = await superAdminRepo.createAdmin({
            userId: user.id,
            createdBySuperAdminId: superAdminId,
            districtId: data.districtId,
            entitlementMetadata: data.entitlementMetadata,
        });
        return { user, admin };
    }
    async listAdmins() {
        return superAdminRepo.findAdmins();
    }
    async updateAdminStatus(adminId, status) {
        return superAdminRepo.updateAdminStatus(adminId, status);
    }
    async assignModuleAccess(data) {
        return superAdminRepo.assignModuleAccess({
            userId: data.userId,
            moduleName: data.moduleName,
            canCreate: data.permissions.canCreate,
            canRead: data.permissions.canRead,
            canUpdate: data.permissions.canUpdate,
            canDelete: data.permissions.canDelete,
        });
    }
}
exports.SuperAdminService = SuperAdminService;
//# sourceMappingURL=service.js.map