"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const AppError_1 = require("../errors/AppError");
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req);
            next();
        }
        catch (error) {
            const validationErrors = error.errors.map((err) => ({
                field: err.path.join('.'),
                message: err.message,
            }));
            throw new AppError_1.ValidationError(`Validation failed: ${validationErrors.map((e) => e.message).join(', ')}`);
        }
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validation.js.map