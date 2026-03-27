"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const middleware_1 = require("../../common/middleware");
const utils_1 = require("../../common/utils");
const router = (0, express_1.Router)();
const eligibilityController = new controller_1.EligibilityController();
router.use(middleware_1.authenticate);
router.get('/:patientId', (0, utils_1.asyncHandler)(eligibilityController.checkEligibility.bind(eligibilityController)));
exports.default = router;
//# sourceMappingURL=routes.js.map