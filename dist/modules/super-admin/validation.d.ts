import { z } from 'zod';
export declare const createAdminSchema: z.ZodObject<{
    body: z.ZodObject<{
        fullName: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        districtId: z.ZodString;
        entitlementMetadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        fullName: string;
        email: string;
        phone: string;
        districtId: string;
        entitlementMetadata?: Record<string, any> | undefined;
    }, {
        fullName: string;
        email: string;
        phone: string;
        districtId: string;
        entitlementMetadata?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        districtId: string;
        entitlementMetadata?: Record<string, any> | undefined;
    };
}, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        districtId: string;
        entitlementMetadata?: Record<string, any> | undefined;
    };
}>;
export declare const assignModuleAccessSchema: z.ZodObject<{
    body: z.ZodObject<{
        userId: z.ZodString;
        moduleName: z.ZodString;
        permissions: z.ZodObject<{
            canCreate: z.ZodBoolean;
            canRead: z.ZodBoolean;
            canUpdate: z.ZodBoolean;
            canDelete: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        }, {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        moduleName: string;
        permissions: {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        };
    }, {
        userId: string;
        moduleName: string;
        permissions: {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        userId: string;
        moduleName: string;
        permissions: {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        };
    };
}, {
    body: {
        userId: string;
        moduleName: string;
        permissions: {
            canCreate: boolean;
            canRead: boolean;
            canUpdate: boolean;
            canDelete: boolean;
        };
    };
}>;
export declare const updateAdminStatusSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    body: z.ZodObject<{
        status: z.ZodEnum<["ACTIVE", "SUSPENDED"]>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "SUSPENDED";
    }, {
        status: "ACTIVE" | "SUSPENDED";
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
    body: {
        status: "ACTIVE" | "SUSPENDED";
    };
}, {
    params: {
        id: string;
    };
    body: {
        status: "ACTIVE" | "SUSPENDED";
    };
}>;
//# sourceMappingURL=validation.d.ts.map