"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("../../common/middleware/validation");
const utils_1 = require("../../common/utils");
const middleware_1 = require("../../common/middleware");
const validation_2 = require("./validation");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const usersController = new controller_1.UsersController();
router.post('/', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validation_1.validateRequest)(validation_2.createUserSchema), (0, utils_1.asyncHandler)(usersController.createUser.bind(usersController)));
router.get('/', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, utils_1.asyncHandler)(usersController.getAllUsers.bind(usersController)));
router.get('/:id', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validation_1.validateRequest)(validation_2.userIdSchema), (0, utils_1.asyncHandler)(usersController.getUserById.bind(usersController)));
router.patch('/:id', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validation_1.validateRequest)(validation_2.updateUserSchema), (0, utils_1.asyncHandler)(usersController.updateUser.bind(usersController)));
router.delete('/:id', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validation_1.validateRequest)(validation_2.userIdSchema), (0, utils_1.asyncHandler)(usersController.softDeleteUser.bind(usersController)));
router.patch('/:id/status', middleware_1.authenticate, (0, middleware_1.authorize)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validation_1.validateRequest)(validation_2.changeStatusSchema), (0, utils_1.asyncHandler)(usersController.changeUserStatus.bind(usersController)));
exports.default = router;
//# sourceMappingURL=routes.js.map