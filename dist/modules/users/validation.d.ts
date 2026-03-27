import { z } from 'zod';
export declare const createUserSchema: z.ZodObject<{
    body: z.ZodObject<{
        fullName: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        password: z.ZodString;
        role: z.ZodNativeEnum<{
            SUPER_ADMIN: "SUPER_ADMIN";
            ADMIN: "ADMIN";
            VENDOR: "VENDOR";
            FIELD_STAFF: "FIELD_STAFF";
            DOCTOR: "DOCTOR";
            PATIENT: "PATIENT";
        }>;
        status: z.ZodOptional<z.ZodNativeEnum<{
            PENDING: "PENDING";
            ACTIVE: "ACTIVE";
            REJECTED: "REJECTED";
            SUSPENDED: "SUSPENDED";
        }>>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    }, {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    };
}, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    };
}>;
export declare const updateUserSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    body: z.ZodObject<{
        fullName: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodNativeEnum<{
            SUPER_ADMIN: "SUPER_ADMIN";
            ADMIN: "ADMIN";
            VENDOR: "VENDOR";
            FIELD_STAFF: "FIELD_STAFF";
            DOCTOR: "DOCTOR";
            PATIENT: "PATIENT";
        }>>;
        status: z.ZodOptional<z.ZodNativeEnum<{
            PENDING: "PENDING";
            ACTIVE: "ACTIVE";
            REJECTED: "REJECTED";
            SUSPENDED: "SUSPENDED";
        }>>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        fullName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        role?: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT" | undefined;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    }, {
        fullName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        role?: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT" | undefined;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
    body: {
        fullName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        role?: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT" | undefined;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    };
}, {
    params: {
        id: string;
    };
    body: {
        fullName?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        role?: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT" | undefined;
        status?: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED" | undefined;
        isActive?: boolean | undefined;
    };
}>;
export declare const userIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
}, {
    params: {
        id: string;
    };
}>;
export declare const changeStatusSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    body: z.ZodObject<{
        status: z.ZodNativeEnum<{
            PENDING: "PENDING";
            ACTIVE: "ACTIVE";
            REJECTED: "REJECTED";
            SUSPENDED: "SUSPENDED";
        }>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED";
        isActive?: boolean | undefined;
    }, {
        status: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED";
        isActive?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        id: string;
    };
    body: {
        status: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED";
        isActive?: boolean | undefined;
    };
}, {
    params: {
        id: string;
    };
    body: {
        status: "PENDING" | "ACTIVE" | "REJECTED" | "SUSPENDED";
        isActive?: boolean | undefined;
    };
}>;
//# sourceMappingURL=validation.d.ts.map