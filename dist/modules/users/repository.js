"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = __importDefault(require("../../config/database"));
class UserRepository {
    async create(data) {
        return database_1.default.user.create({ data });
    }
    async findById(id) {
        return database_1.default.user.findUnique({ where: { id } });
    }
    async findByEmail(email) {
        return database_1.default.user.findUnique({ where: { email } });
    }
    async findAll(options) {
        return database_1.default.user.findMany({
            where: {
                deletedAt: null,
                ...options?.where,
            },
            skip: options?.skip,
            take: options?.take,
            orderBy: { createdAt: 'desc' },
        });
    }
    async count(options) {
        return database_1.default.user.count({
            where: {
                deletedAt: null,
                ...options?.where,
            },
        });
    }
    async update(id, data) {
        return database_1.default.user.update({ where: { id }, data });
    }
    async softDelete(id) {
        return database_1.default.user.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                isActive: false,
            },
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=repository.js.map