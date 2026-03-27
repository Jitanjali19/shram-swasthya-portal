"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatusSchema = exports.userIdSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../common/validators");
const client_1 = require("@prisma/client");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().min(2, 'Full name must be at least 2 characters'),
        email: validators_1.emailSchema,
        phone: validators_1.phoneSchema,
        password: validators_1.passwordSchema,
        role: zod_1.z.nativeEnum(client_1.UserRole),
        status: zod_1.z.nativeEnum(client_1.UserStatus).optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.updateUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: validators_1.uuidSchema,
    }),
    body: zod_1.z.object({
        fullName: zod_1.z.string().min(2).optional(),
        email: validators_1.emailSchema.optional(),
        phone: validators_1.phoneSchema.optional(),
        role: zod_1.z.nativeEnum(client_1.UserRole).optional(),
        status: zod_1.z.nativeEnum(client_1.UserStatus).optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.userIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: validators_1.uuidSchema,
    }),
});
exports.changeStatusSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: validators_1.uuidSchema,
    }),
    body: zod_1.z.object({
        status: zod_1.z.nativeEnum(client_1.UserStatus),
        isActive: zod_1.z.boolean().optional(),
    }),
});
//# sourceMappingURL=validation.js.map