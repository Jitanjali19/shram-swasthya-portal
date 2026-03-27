"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSchema = exports.paginationSchema = exports.uuidSchema = exports.passwordSchema = exports.phoneSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.string().email('Invalid email format');
exports.phoneSchema = zod_1.z.string().regex(/^\d{10}$/, 'Phone must be 10 digits');
exports.passwordSchema = zod_1.z.string().min(6, 'Password must be at least 6 characters');
exports.uuidSchema = zod_1.z.string().uuid('Invalid UUID format');
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.number().int().min(1).default(1),
    limit: zod_1.z.number().int().min(1).max(100).default(10),
});
exports.dateSchema = zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date format');
//# sourceMappingURL=index.js.map