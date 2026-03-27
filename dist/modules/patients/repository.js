"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRepository = void 0;
const database_1 = __importDefault(require("../../config/database"));
const client_1 = require("@prisma/client");
class PatientRepository {
    async createPatient(data) {
        return database_1.default.patient.create({ data });
    }
    async findPatientById(id) {
        return database_1.default.patient.findUnique({ where: { id } });
    }
    async findPatientBySamagraId(samagraId) {
        return database_1.default.patient.findUnique({ where: { samagraId } });
    }
    async findPatientByAbhaId(abhaId) {
        return database_1.default.patient.findUnique({ where: { abhaId } });
    }
    async findPatientByQR(qrCodeValue) {
        return database_1.default.patient.findUnique({ where: { qrCodeValue } });
    }
    async updatePatient(id, data) {
        return database_1.default.patient.update({ where: { id }, data });
    }
    async getPatientHistory(patientId) {
        return database_1.default.patientCampVisit.findMany({
            where: { patientId },
            include: {
                camp: true,
                assessment: true,
                report: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getPendingPatients() {
        return database_1.default.patient.findMany({
            where: { registrationStatus: client_1.PatientRegistrationStatus.PENDING },
            include: { district: true },
        });
    }
}
exports.PatientRepository = PatientRepository;
//# sourceMappingURL=repository.js.map