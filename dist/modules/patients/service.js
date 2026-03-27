"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const repository_1 = require("./repository");
const repository_2 = require("../auth/repository");
const client_1 = require("@prisma/client");
const utils_1 = require("../../common/utils");
const SamagraService_1 = require("../../common/services/SamagraService");
const AbhaService_1 = require("../../common/services/AbhaService");
const AppError_1 = require("../../common/errors/AppError");
const patientRepo = new repository_1.PatientRepository();
const authRepo = new repository_2.AuthRepository();
const samagraService = new SamagraService_1.SamagraService();
const abhaService = new AbhaService_1.AbhaService();
class PatientService {
    async registerPatient(data) {
        // Check for existing patient
        if (data.samagraId) {
            const existing = await patientRepo.findPatientBySamagraId(data.samagraId);
            if (existing)
                throw new AppError_1.AppError('Patient with this Samagra ID already exists', 409);
        }
        if (data.abhaId) {
            const existing = await patientRepo.findPatientByAbhaId(data.abhaId);
            if (existing)
                throw new AppError_1.AppError('Patient with this ABHA ID already exists', 409);
        }
        // Fetch identity if provided
        let fetchedData = {};
        if (data.samagraId) {
            fetchedData = await samagraService.fetchIdentity(data.samagraId);
        }
        else if (data.abhaId) {
            fetchedData = await abhaService.fetchIdentity(data.abhaId);
        }
        const dob = new Date(data.dob);
        const age = (0, utils_1.calculateAge)(dob);
        const patient = await patientRepo.createPatient({
            samagraId: data.samagraId,
            abhaId: data.abhaId,
            maskedSamagraId: data.samagraId ? (0, utils_1.maskId)(data.samagraId) : undefined,
            maskedAbhaId: data.abhaId ? (0, utils_1.maskId)(data.abhaId) : undefined,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            dob,
            age,
            phone: data.phone,
            addressLine: data.addressLine,
            village: data.village,
            city: data.city,
            districtId: data.districtId,
            state: data.state,
            pincode: data.pincode,
            registrationStatus: client_1.PatientRegistrationStatus.PENDING,
        });
        return this.mapToProfile(patient);
    }
    async getPatientById(id) {
        const patient = await patientRepo.findPatientById(id);
        if (!patient)
            throw new AppError_1.AppError('Patient not found', 404);
        return this.mapToProfile(patient);
    }
    async getPatientByQR(qrCode) {
        const patient = await patientRepo.findPatientByQR(qrCode);
        if (!patient)
            throw new AppError_1.AppError('Patient not found', 404);
        return this.mapToProfile(patient);
    }
    async getPatientHistory(patientId) {
        return patientRepo.getPatientHistory(patientId);
    }
    async getPatientProfile(patientId) {
        return this.getPatientById(patientId);
    }
    async generatePatientQR(patientId) {
        const patient = await patientRepo.findPatientById(patientId);
        if (!patient)
            throw new AppError_1.AppError('Patient not found', 404);
        if (patient.registrationStatus !== 'APPROVED')
            throw new AppError_1.AppError('Patient not approved', 403);
        const qrValue = (0, utils_1.generateUUID)();
        const qrUrl = await (0, utils_1.generateQRCode)(qrValue);
        await patientRepo.updatePatient(patientId, {
            qrCodeValue: qrValue,
            qrCodeUrl: qrUrl,
        });
        return qrUrl;
    }
    async approvePatientRegistration(patientId, adminId) {
        const patient = await patientRepo.findPatientById(patientId);
        if (!patient)
            throw new AppError_1.AppError('Patient not found', 404);
        await patientRepo.updatePatient(patientId, {
            registrationStatus: client_1.PatientRegistrationStatus.APPROVED,
            approvedByAdminId: adminId,
            approvedAt: new Date(),
        });
        return this.getPatientById(patientId);
    }
    async rejectPatientRegistration(patientId, adminId, reason) {
        const patient = await patientRepo.findPatientById(patientId);
        if (!patient)
            throw new AppError_1.AppError('Patient not found', 404);
        await patientRepo.updatePatient(patientId, {
            registrationStatus: client_1.PatientRegistrationStatus.REJECTED,
            approvedByAdminId: adminId,
            rejectionReason: reason,
        });
        return this.getPatientById(patientId);
    }
    async getPendingPatients() {
        return patientRepo.getPendingPatients();
    }
    mapToProfile(patient) {
        return {
            id: patient.id,
            samagraId: patient.samagraId,
            abhaId: patient.abhaId,
            maskedSamagraId: patient.maskedSamagraId,
            maskedAbhaId: patient.maskedAbhaId,
            firstName: patient.firstName,
            lastName: patient.lastName,
            gender: patient.gender,
            dob: patient.dob,
            age: patient.age,
            phone: patient.phone,
            addressLine: patient.addressLine,
            village: patient.village,
            city: patient.city,
            districtId: patient.districtId,
            state: patient.state,
            pincode: patient.pincode,
            qrCodeValue: patient.qrCodeValue,
            qrCodeUrl: patient.qrCodeUrl,
            registrationStatus: patient.registrationStatus,
            nextDueDate: patient.nextDueDate,
        };
    }
}
exports.PatientService = PatientService;
//# sourceMappingURL=service.js.map