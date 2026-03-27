"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const repository_1 = require("./repository");
const AppError_1 = require("../../common/errors/AppError");
const authRepo = new repository_1.AuthRepository();
class AuthService {
    async login(credentials) {
        const user = await authRepo.findUserByEmail(credentials.email);
        if (!user) {
            throw new AppError_1.AppError('Invalid credentials', 401);
        }
        const isPasswordValid = await bcryptjs_1.default.compare(credentials.password, user.passwordHash);
        if (!isPasswordValid) {
            throw new AppError_1.AppError('Invalid credentials', 401);
        }
        if (user.status !== 'ACTIVE') {
            throw new AppError_1.AppError('Account is not active', 403);
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return {
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,
            },
            token,
        };
    }
    async register(data) {
        const existingUser = await authRepo.findUserByEmail(data.email);
        if (existingUser) {
            throw new AppError_1.AppError('User already exists', 409);
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        const user = await authRepo.createUser({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            passwordHash: hashedPassword,
            role: data.role,
        });
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return {
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,
            },
            token,
        };
    }
    async me(userId) {
        const user = await authRepo.findUserById(userId);
        if (!user || user.deletedAt) {
            throw new AppError_1.AppError('User not found', 404);
        }
        return {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            status: user.status,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
    async logout() {
        // For stateless JWT, logout is handled client-side via token deletion.
        return {
            message: 'Logged out successfully',
        };
    }
    async changePassword(userId, payload) {
        const user = await authRepo.findUserById(userId);
        if (!user || user.deletedAt) {
            throw new AppError_1.AppError('User not found', 404);
        }
        const isPasswordValid = await bcryptjs_1.default.compare(payload.currentPassword, user.passwordHash);
        if (!isPasswordValid) {
            throw new AppError_1.AppError('Current password is invalid', 400);
        }
        const hashedNewPassword = await bcryptjs_1.default.hash(payload.newPassword, 10);
        await authRepo.updateUser(userId, { passwordHash: hashedNewPassword });
        return { message: 'Password changed successfully' };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=service.js.map