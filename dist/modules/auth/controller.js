"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const AppError_1 = require("../../common/errors/AppError");
const authService = new service_1.AuthService();
class AuthController {
    async login(req, res) {
        const credentials = req.body;
        const result = await authService.login(credentials);
        (0, utils_1.sendSuccess)(res, 'Login successful', result);
    }
    async register(req, res) {
        const data = req.body;
        const result = await authService.register(data);
        (0, utils_1.sendSuccess)(res, 'Registration successful', result, 201);
    }
    async me(req, res) {
        const userId = req.user?.id;
        if (!userId) {
            throw new AppError_1.AppError('Unauthorized', 401);
        }
        const result = await authService.me(userId);
        (0, utils_1.sendSuccess)(res, 'Current user fetched successfully', result);
    }
    async logout(req, res) {
        const result = await authService.logout();
        (0, utils_1.sendSuccess)(res, 'Logout successful', result);
    }
    async changePassword(req, res) {
        const userId = req.user?.id;
        if (!userId) {
            throw new AppError_1.AppError('Unauthorized', 401);
        }
        const payload = req.body;
        const result = await authService.changePassword(userId, payload);
        (0, utils_1.sendSuccess)(res, 'Password changed successfully', result);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=controller.js.map