"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const patientService = new service_1.PatientService();
class PatientController {
    async registerPatient(req, res) {
        const data = req.body;
        const result = await patientService.registerPatient(data);
        (0, utils_1.sendSuccess)(res, 'Patient registered successfully', result, 201);
    }
    async getPatientById(req, res) {
        const { id } = req.params;
        const result = await patientService.getPatientById(id);
        (0, utils_1.sendSuccess)(res, 'Patient retrieved successfully', result);
    }
    async getPatientByQR(req, res) {
        const { qrCode } = req.params;
        const result = await patientService.getPatientByQR(qrCode);
        (0, utils_1.sendSuccess)(res, 'Patient retrieved successfully', result);
    }
    async getPatientHistory(req, res) {
        const { id } = req.params;
        const result = await patientService.getPatientHistory(id);
        (0, utils_1.sendSuccess)(res, 'Patient history retrieved successfully', result);
    }
    async getPatientProfile(req, res) {
        const { id } = req.params;
        const result = await patientService.getPatientProfile(id);
        (0, utils_1.sendSuccess)(res, 'Patient profile retrieved successfully', result);
    }
    async generatePatientQR(req, res) {
        const { id } = req.params;
        const result = await patientService.generatePatientQR(id);
        (0, utils_1.sendSuccess)(res, 'QR code generated successfully', { qrUrl: result });
    }
    async viewOwnReports(req, res) {
        const patientId = req.user.id; // Assuming patient user
        const result = await patientService.getPatientHistory(patientId);
        (0, utils_1.sendSuccess)(res, 'Reports retrieved successfully', result);
    }
}
exports.PatientController = PatientController;
//# sourceMappingURL=controller.js.map