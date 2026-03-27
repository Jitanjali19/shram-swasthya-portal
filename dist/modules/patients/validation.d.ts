import { z } from 'zod';
export declare const registerPatientSchema: z.ZodObject<{
    body: z.ZodObject<{
        samagraId: z.ZodOptional<z.ZodString>;
        abhaId: z.ZodOptional<z.ZodString>;
        firstName: z.ZodString;
        lastName: z.ZodString;
        gender: z.ZodNativeEnum<{
            MALE: "MALE";
            FEMALE: "FEMALE";
            OTHER: "OTHER";
        }>;
        dob: z.ZodEffects<z.ZodString, string, string>;
        phone: z.ZodString;
        addressLine: z.ZodString;
        village: z.ZodString;
        city: z.ZodString;
        districtId: z.ZodString;
        state: z.ZodString;
        pincode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        phone: string;
        districtId: string;
        firstName: string;
        lastName: string;
        gender: "MALE" | "FEMALE" | "OTHER";
        dob: string;
        addressLine: string;
        village: string;
        city: string;
        state: string;
        pincode: string;
        samagraId?: string | undefined;
        abhaId?: string | undefined;
    }, {
        phone: string;
        districtId: string;
        firstName: string;
        lastName: string;
        gender: "MALE" | "FEMALE" | "OTHER";
        dob: string;
        addressLine: string;
        village: string;
        city: string;
        state: string;
        pincode: string;
        samagraId?: string | undefined;
        abhaId?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        phone: string;
        districtId: string;
        firstName: string;
        lastName: string;
        gender: "MALE" | "FEMALE" | "OTHER";
        dob: string;
        addressLine: string;
        village: string;
        city: string;
        state: string;
        pincode: string;
        samagraId?: string | undefined;
        abhaId?: string | undefined;
    };
}, {
    body: {
        phone: string;
        districtId: string;
        firstName: string;
        lastName: string;
        gender: "MALE" | "FEMALE" | "OTHER";
        dob: string;
        addressLine: string;
        village: string;
        city: string;
        state: string;
        pincode: string;
        samagraId?: string | undefined;
        abhaId?: string | undefined;
    };
}>;
export declare const getPatientByIdSchema: z.ZodObject<{
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
export declare const getPatientByQRSchema: z.ZodObject<{
    params: z.ZodObject<{
        qrCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        qrCode: string;
    }, {
        qrCode: string;
    }>;
}, "strip", z.ZodTypeAny, {
    params: {
        qrCode: string;
    };
}, {
    params: {
        qrCode: string;
    };
}>;
//# sourceMappingURL=validation.d.ts.map