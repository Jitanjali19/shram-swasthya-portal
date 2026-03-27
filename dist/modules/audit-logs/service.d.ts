import { AuditLogData } from '../../common/types';
export declare class AuditLogService {
    createAuditLog(data: AuditLogData): Promise<{
        id: string;
        createdAt: Date;
        actorRole: import(".prisma/client").$Enums.UserRole;
        action: string;
        entityType: string;
        entityId: string;
        ipAddress: string;
        metadataJson: import("@prisma/client/runtime/library").JsonValue;
        actorUserId: string;
    }>;
    listAuditLogs(filters: {
        entityType?: string;
        entityId?: string;
        actorUserId?: string;
    }, page?: number, limit?: number): Promise<{
        logs: {
            id: string;
            createdAt: Date;
            actorRole: import(".prisma/client").$Enums.UserRole;
            action: string;
            entityType: string;
            entityId: string;
            ipAddress: string;
            metadataJson: import("@prisma/client/runtime/library").JsonValue;
            actorUserId: string;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getAuditByEntity(entityType: string, entityId: string): Promise<{
        id: string;
        createdAt: Date;
        actorRole: import(".prisma/client").$Enums.UserRole;
        action: string;
        entityType: string;
        entityId: string;
        ipAddress: string;
        metadataJson: import("@prisma/client/runtime/library").JsonValue;
        actorUserId: string;
    }[]>;
}
//# sourceMappingURL=service.d.ts.map