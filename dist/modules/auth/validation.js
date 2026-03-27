"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../common/validators");
const client_1 = require("@prisma/client");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: validators_1.emailSchema,
        password: validators_1.passwordSchema,
    }),
});
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().min(2, 'Full name must be at least 2 characters'),
        email: validators_1.emailSchema,
        phone: validators_1.phoneSchema,
        password: validators_1.passwordSchema,
        role: zod_1.z.nativeEnum(client_1.UserRole),
    }),
});
exports.changePasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        currentPassword: validators_1.passwordSchema,
        newPassword: validators_1.passwordSchema,
    }),
});
//# sourceMappingURL=validation.js.map