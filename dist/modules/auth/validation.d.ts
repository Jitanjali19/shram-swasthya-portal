import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
    };
}, {
    body: {
        email: string;
        password: string;
    };
}>;
export declare const registerSchema: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
    }, {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
    };
}, {
    body: {
        fullName: string;
        email: string;
        phone: string;
        role: "SUPER_ADMIN" | "ADMIN" | "VENDOR" | "FIELD_STAFF" | "DOCTOR" | "PATIENT";
        password: string;
    };
}>;
export declare const changePasswordSchema: z.ZodObject<{
    body: z.ZodObject<{
        currentPassword: z.ZodString;
        newPassword: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currentPassword: string;
        newPassword: string;
    }, {
        currentPassword: string;
        newPassword: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        currentPassword: string;
        newPassword: string;
    };
}, {
    body: {
        currentPassword: string;
        newPassword: string;
    };
}>;
//# sourceMappingURL=validation.d.ts.map