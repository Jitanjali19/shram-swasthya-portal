"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const middleware_1 = require("../../common/middleware");
const enums_1 = require("../../common/enums");
const utils_1 = require("../../common/utils");
const router = (0, express_1.Router)();
const auditLogController = new controller_1.AuditLogController();
router.use(middleware_1.authenticate);
router.use((0, middleware_1.authorize)(enums_1.UserRole.SUPER_ADMIN, enums_1.UserRole.ADMIN));
router.get('/', (0, utils_1.asyncHandler)(auditLogController.listAuditLogs.bind(auditLogController)));
router.get('/:entityType/:entityId', (0, utils_1.asyncHandler)(auditLogController.getAuditByEntity.bind(auditLogController)));
exports.default = router;
//# sourceMappingURL=routes.js.map