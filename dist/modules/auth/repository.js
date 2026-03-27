"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const database_1 = __importDefault(require("../../config/database"));
class AuthRepository {
    async findUserByEmail(email) {
        return database_1.default.user.findUnique({ where: { email } });
    }
    async findUserById(id) {
        return database_1.default.user.findUnique({ where: { id } });
    }
    async createUser(data) {
        return database_1.default.user.create({ data });
    }
    async updateUser(id, data) {
        return database_1.default.user.update({ where: { id }, data });
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=repository.js.map