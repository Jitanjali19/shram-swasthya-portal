"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const validation_1 = require("./validation");
const validation_2 = require("../../common/middleware/validation");
const middleware_1 = require("../../common/middleware");
const enums_1 = require("../../common/enums");
const utils_1 = require("../../common/utils");
const router = (0, express_1.Router)();
const superAdminController = new controller_1.SuperAdminController();
router.use(middleware_1.authenticate);
router.use((0, middleware_1.authorize)(enums_1.UserRole.SUPER_ADMIN));
router.post('/admins', (0, validation_2.validateRequest)(validation_1.createAdminSchema), (0, utils_1.asyncHandler)(superAdminController.createAdmin.bind(superAdminController)));
router.get('/admins', (0, utils_1.asyncHandler)(superAdminController.listAdmins.bind(superAdminController)));
router.patch('/admins/:id/status', (0, validation_2.validateRequest)(validation_1.updateAdminStatusSchema), (0, utils_1.asyncHandler)(superAdminController.updateAdminStatus.bind(superAdminController)));
router.post('/module-access', (0, validation_2.validateRequest)(validation_1.assignModuleAccessSchema), (0, utils_1.asyncHandler)(superAdminController.assignModuleAccess.bind(superAdminController)));
exports.default = router;
//# sourceMappingURL=routes.js.map