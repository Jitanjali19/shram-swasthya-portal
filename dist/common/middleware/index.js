"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../utils");
const AppError_1 = require("../errors/AppError");
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return (0, utils_1.sendError)(res, 'Access token required', 'No token provided', 401);
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return (0, utils_1.sendError)(res, 'Invalid token', 'Token verification failed', 401);
    }
};
exports.authenticate = authenticate;
const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return (0, utils_1.sendError)(res, 'Authentication required', 'User not authenticated', 401);
        }
        if (!allowedRoles.includes(req.user.role)) {
            return (0, utils_1.sendError)(res, 'Insufficient permissions', 'Role not authorized', 403);
        }
        next();
    };
};
exports.authorize = authorize;
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: `Cannot ${req.method} ${req.originalUrl}`,
    });
};
exports.notFound = notFound;
const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return (0, utils_1.sendError)(res, err.message, err.message, err.statusCode);
    }
    console.error(err);
    return (0, utils_1.sendError)(res, 'Internal server error', 'Something went wrong', 500);
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.js.map