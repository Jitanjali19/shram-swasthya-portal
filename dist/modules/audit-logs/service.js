"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogService = void 0;
const database_1 = __importDefault(require("../../config/database"));
class AuditLogService {
    async createAuditLog(data) {
        const actorRole = data.actorRole;
        return database_1.default.auditLog.create({
            data: {
                actorUserId: data.actorUserId,
                actorRole,
                action: data.action,
                entityType: data.entityType,
                entityId: data.entityId,
                ipAddress: data.ipAddress,
                metadataJson: data.metadata || {},
            },
        });
    }
    async listAuditLogs(filters, page = 1, limit = 10) {
        const where = {};
        if (filters.entityType)
            where.entityType = filters.entityType;
        if (filters.entityId)
            where.entityId = filters.entityId;
        if (filters.actorUserId)
            where.actorUserId = filters.actorUserId;
        const [logs, total] = await Promise.all([
            database_1.default.auditLog.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            }),
            database_1.default.auditLog.count({ where }),
        ]);
        return {
            logs,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getAuditByEntity(entityType, entityId) {
        return database_1.default.auditLog.findMany({
            where: { entityType, entityId },
            orderBy: { createdAt: 'desc' },
        });
    }
}
exports.AuditLogService = AuditLogService;
//# sourceMappingURL=service.js.map