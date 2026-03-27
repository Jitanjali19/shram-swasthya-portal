"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const auditLogService = new service_1.AuditLogService();
class AuditLogController {
    async listAuditLogs(req, res) {
        const { entityType, entityId, actorUserId, page = 1, limit = 10 } = req.query;
        const filters = { entityType: entityType, entityId: entityId, actorUserId: actorUserId };
        const result = await auditLogService.listAuditLogs(filters, Number(page), Number(limit));
        (0, utils_1.sendSuccess)(res, 'Audit logs retrieved successfully', result);
    }
    async getAuditByEntity(req, res) {
        const { entityType, entityId } = req.params;
        const result = await auditLogService.getAuditByEntity(entityType, entityId);
        (0, utils_1.sendSuccess)(res, 'Audit logs retrieved successfully', result);
    }
}
exports.AuditLogController = AuditLogController;
//# sourceMappingURL=controller.js.map