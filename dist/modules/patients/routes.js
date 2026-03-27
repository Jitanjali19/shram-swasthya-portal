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
const patientController = new controller_1.PatientController();
// Public routes
router.post('/register', (0, validation_2.validateRequest)(validation_1.registerPatientSchema), (0, utils_1.asyncHandler)(patientController.registerPatient.bind(patientController)));
// Protected routes
router.use(middleware_1.authenticate);
router.get('/:id', (0, validation_2.validateRequest)(validation_1.getPatientByIdSchema), (0, utils_1.asyncHandler)(patientController.getPatientById.bind(patientController)));
router.get('/qr/:qrCode', (0, validation_2.validateRequest)(validation_1.getPatientByQRSchema), (0, utils_1.asyncHandler)(patientController.getPatientByQR.bind(patientController)));
router.get('/:id/history', (0, utils_1.asyncHandler)(patientController.getPatientHistory.bind(patientController)));
router.get('/:id/profile', (0, utils_1.asyncHandler)(patientController.getPatientProfile.bind(patientController)));
router.post('/:id/generate-qr', (0, middleware_1.authorize)(enums_1.UserRole.ADMIN), (0, utils_1.asyncHandler)(patientController.generatePatientQR.bind(patientController)));
router.get('/me/reports', (0, middleware_1.authorize)(enums_1.UserRole.PATIENT), (0, utils_1.asyncHandler)(patientController.viewOwnReports.bind(patientController)));
exports.default = router;
//# sourceMappingURL=routes.js.map