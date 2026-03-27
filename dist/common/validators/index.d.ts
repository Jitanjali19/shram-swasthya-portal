import { z } from 'zod';
export declare const emailSchema: z.ZodString;
export declare const phoneSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const uuidSchema: z.ZodString;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const dateSchema: z.ZodEffects<z.ZodString, string, string>;
//# sourceMappingURL=index.d.ts.map