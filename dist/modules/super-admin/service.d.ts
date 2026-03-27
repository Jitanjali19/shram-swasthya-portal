import { CreateAdminRequest, AssignModuleAccessRequest } from './types';
export declare class SuperAdminService {
    createAdmin(data: CreateAdminRequest, superAdminId: string): Promise<{
        user: {
            id: string;
            fullName: string;
            email: string;
            phone: string;
            passwordHash: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        admin: {
            id: string;
            createdAt: Date;
            userId: string;
            createdBySuperAdminId: string;
            districtId: string;
            entitlementMetadata: import("@prisma/client/runtime/library").JsonValue | null;
        };
    }>;
    listAdmins(): Promise<({
        id: string;
        createdAt: Date;
        userId: string;
        createdBySuperAdminId: string;
        districtId: string;
        entitlementMetadata: import("@prisma/client/runtime/library").JsonValue | null;
    } & {
        user: import(".prisma/client").User;
    })[]>;
    updateAdminStatus(adminId: string, status: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        phone: string;
        passwordHash: string;
        role: import(".prisma/client").$Enums.UserRole;
        status: import(".prisma/client").$Enums.UserStatus;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    assignModuleAccess(data: AssignModuleAccessRequest): Promise<{
        id: string;
        userId: string;
        moduleName: string;
        canCreate: boolean;
        canRead: boolean;
        canUpdate: boolean;
        canDelete: boolean;
    }>;
}
//# sourceMappingURL=service.d.ts.map