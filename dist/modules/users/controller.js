"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const userService = new service_1.UserService();
class UsersController {
    async createUser(req, res) {
        const payload = req.body;
        const user = await userService.createUser(payload);
        (0, utils_1.sendSuccess)(res, 'User created successfully', user, 201);
    }
    async getAllUsers(req, res) {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 25);
        const { users, pagination } = await userService.getAllUsers(page, limit);
        (0, utils_1.sendSuccess)(res, 'Users retrieved successfully', { users, pagination }, 200);
    }
    async getUserById(req, res) {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        (0, utils_1.sendSuccess)(res, 'User retrieved successfully', user);
    }
    async updateUser(req, res) {
        const { id } = req.params;
        const payload = req.body;
        const user = await userService.updateUser(id, payload);
        (0, utils_1.sendSuccess)(res, 'User updated successfully', user);
    }
    async softDeleteUser(req, res) {
        const { id } = req.params;
        const user = await userService.softDeleteUser(id);
        (0, utils_1.sendSuccess)(res, 'User soft-deleted successfully', user);
    }
    async changeUserStatus(req, res) {
        const { id } = req.params;
        const user = await userService.changeUserStatus(id, req.body);
        (0, utils_1.sendSuccess)(res, 'User status updated successfully', user);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=controller.js.map