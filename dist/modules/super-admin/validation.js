"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminStatusSchema = exports.assignModuleAccessSchema = exports.createAdminSchema = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../common/validators");
exports.createAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().min(2),
        email: validators_1.emailSchema,
        phone: validators_1.phoneSchema,
        districtId: validators_1.uuidSchema,
        entitlementMetadata: zod_1.z.record(zod_1.z.any()).optional(),
    }),
});
exports.assignModuleAccessSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: validators_1.uuidSchema,
        moduleName: zod_1.z.string(),
        permissions: zod_1.z.object({
            canCreate: zod_1.z.boolean(),
            canRead: zod_1.z.boolean(),
            canUpdate: zod_1.z.boolean(),
            canDelete: zod_1.z.boolean(),
        }),
    }),
});
exports.updateAdminStatusSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: validators_1.uuidSchema,
    }),
    body: zod_1.z.object({
        status: zod_1.z.enum(['ACTIVE', 'SUSPENDED']),
    }),
});
//# sourceMappingURL=validation.js.map