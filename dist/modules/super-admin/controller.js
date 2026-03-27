"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const superAdminService = new service_1.SuperAdminService();
class SuperAdminController {
    async createAdmin(req, res) {
        const data = req.body;
        const superAdminId = req.user.id;
        const result = await superAdminService.createAdmin(data, superAdminId);
        (0, utils_1.sendSuccess)(res, 'Admin created successfully', result, 201);
    }
    async listAdmins(req, res) {
        const admins = await superAdminService.listAdmins();
        (0, utils_1.sendSuccess)(res, 'Admins retrieved successfully', admins);
    }
    async updateAdminStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;
        const result = await superAdminService.updateAdminStatus(id, status);
        (0, utils_1.sendSuccess)(res, 'Admin status updated successfully', result);
    }
    async assignModuleAccess(req, res) {
        const data = req.body;
        const result = await superAdminService.assignModuleAccess(data);
        (0, utils_1.sendSuccess)(res, 'Module access assigned successfully', result);
    }
}
exports.SuperAdminController = SuperAdminController;
//# sourceMappingURL=controller.js.map