"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const repository_1 = require("./repository");
const AppError_1 = require("../../common/errors/AppError");
const userRepository = new repository_1.UserRepository();
class UserService {
    async createUser(data) {
        const existing = await userRepository.findByEmail(data.email);
        if (existing) {
            throw new AppError_1.AppError('User already exists with this email', 409);
        }
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        return userRepository.create({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            passwordHash: hashedPassword,
            role: data.role,
            status: data.status || client_1.UserStatus.PENDING,
            isActive: data.isActive ?? true,
        });
    }
    async getAllUsers(page = 1, limit = 25) {
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            userRepository.findAll({ skip, take: limit }),
            userRepository.count(),
        ]);
        const totalPages = Math.ceil(total / limit);
        return { users, pagination: { page, limit, total, totalPages } };
    }
    async getUserById(id) {
        const user = await userRepository.findById(id);
        if (!user || user.deletedAt) {
            throw new AppError_1.AppError('User not found', 404);
        }
        return user;
    }
    async updateUser(id, data) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new AppError_1.AppError('User not found', 404);
        }
        if (data.email && data.email !== user.email) {
            const exist = await userRepository.findByEmail(data.email);
            if (exist && exist.id !== id) {
                throw new AppError_1.AppError('Email already taken', 409);
            }
        }
        return userRepository.update(id, {
            fullName: data.fullName ?? user.fullName,
            email: data.email ?? user.email,
            phone: data.phone ?? user.phone,
            role: data.role ?? user.role,
            status: data.status ?? user.status,
            isActive: data.isActive ?? user.isActive,
        });
    }
    async softDeleteUser(id) {
        await this.getUserById(id);
        return userRepository.softDelete(id);
    }
    async changeUserStatus(id, payload) {
        await this.getUserById(id);
        return userRepository.update(id, {
            status: payload.status,
            isActive: payload.isActive ?? (payload.status === client_1.UserStatus.ACTIVE),
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=service.js.map