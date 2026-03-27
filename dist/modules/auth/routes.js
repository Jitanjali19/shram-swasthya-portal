"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const validation_2 = require("../../common/middleware/validation");
const utils_1 = require("../../common/utils");
const middleware_1 = require("../../common/middleware");
const router = (0, express_1.Router)();
const authController = new controller_1.AuthController();
router.post('/login', (0, validation_2.validateRequest)(validation_1.loginSchema), (0, utils_1.asyncHandler)(authController.login.bind(authController)));
router.post('/register', (0, validation_2.validateRequest)(validation_1.registerSchema), (0, utils_1.asyncHandler)(authController.register.bind(authController)));
router.post('/logout', middleware_1.authenticate, (0, utils_1.asyncHandler)(authController.logout.bind(authController)));
router.get('/me', middleware_1.authenticate, (0, utils_1.asyncHandler)(authController.me.bind(authController)));
router.post('/change-password', middleware_1.authenticate, (0, validation_2.validateRequest)(validation_1.changePasswordSchema), (0, utils_1.asyncHandler)(authController.changePassword.bind(authController)));
exports.default = router;
//# sourceMappingURL=routes.js.map