"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatientByQRSchema = exports.getPatientByIdSchema = exports.registerPatientSchema = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../common/validators");
const client_1 = require("@prisma/client");
exports.registerPatientSchema = zod_1.z.object({
    body: zod_1.z.object({
        samagraId: zod_1.z.string().optional(),
        abhaId: zod_1.z.string().optional(),
        firstName: zod_1.z.string().min(1),
        lastName: zod_1.z.string().min(1),
        gender: zod_1.z.nativeEnum(client_1.Gender),
        dob: validators_1.dateSchema,
        phone: validators_1.phoneSchema,
        addressLine: zod_1.z.string().min(1),
        village: zod_1.z.string().min(1),
        city: zod_1.z.string().min(1),
        districtId: validators_1.uuidSchema,
        state: zod_1.z.string().min(1),
        pincode: zod_1.z.string().regex(/^\d{6}$/, 'Pincode must be 6 digits'),
    }),
});
exports.getPatientByIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: validators_1.uuidSchema,
    }),
});
exports.getPatientByQRSchema = zod_1.z.object({
    params: zod_1.z.object({
        qrCode: zod_1.z.string(),
    }),
});
//# sourceMappingURL=validation.js.map