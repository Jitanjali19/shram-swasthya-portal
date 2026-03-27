import { Admin, User, RolePermission } from '@prisma/client';
export declare class SuperAdminRepository {
    createAdmin(data: {
        userId: string;
        createdBySuperAdminId: string;
        districtId: string;
        entitlementMetadata?: any;
    }): Promise<Admin>;
    findAdmins(): Promise<(Admin & {
        user: User;
    })[]>;
    findAdminById(id: string): Promise<Admin | null>;
    updateAdminStatus(id: string, status: string): Promise<User>;
    assignModuleAccess(data: {
        userId: string;
        moduleName: string;
        canCreate: boolean;
        canRead: boolean;
        canUpdate: boolean;
        canDelete: boolean;
    }): Promise<RolePermission>;
}
//# sourceMappingURL=repository.d.ts.map