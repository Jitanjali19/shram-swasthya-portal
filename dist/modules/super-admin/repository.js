"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminRepository = void 0;
const database_1 = __importDefault(require("../../config/database"));
class SuperAdminRepository {
    async createAdmin(data) {
        return database_1.default.admin.create({ data });
    }
    async findAdmins() {
        return database_1.default.admin.findMany({
            include: { user: true },
        });
    }
    async findAdminById(id) {
        return database_1.default.admin.findUnique({ where: { id } });
    }
    async updateAdminStatus(id, status) {
        return database_1.default.user.update({
            where: { id: (await this.findAdminById(id))?.userId },
            data: { status: status },
        });
    }
    async assignModuleAccess(data) {
        return database_1.default.rolePermission.upsert({
            where: {
                userId_moduleName: {
                    userId: data.userId,
                    moduleName: data.moduleName,
                },
            },
            update: {
                canCreate: data.canCreate,
                canRead: data.canRead,
                canUpdate: data.canUpdate,
                canDelete: data.canDelete,
            },
            create: data,
        });
    }
}
exports.SuperAdminRepository = SuperAdminRepository;
//# sourceMappingURL=repository.js.map