"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityService = void 0;
const database_1 = __importDefault(require("../../config/database"));
const utils_1 = require("../../common/utils");
class EligibilityService {
    async check365DayEligibility(patientId) {
        const lastVisit = await database_1.default.patientCampVisit.findFirst({
            where: { patientId },
            orderBy: { createdAt: 'desc' },
            include: { report: true },
        });
        const lastCheckupDate = lastVisit?.report?.submittedAt ?? lastVisit?.createdAt;
        const eligible = (0, utils_1.isEligibleForCheckup)(lastCheckupDate ?? null);
        const nextDueDate = lastCheckupDate ? new Date(lastCheckupDate.getTime() + 365 * 24 * 60 * 60 * 1000) : new Date();
        return {
            eligible,
            reason: eligible ? null : 'Patient has visited within the last 365 days',
            nextDueDate,
            lastCheckupDate,
        };
    }
}
exports.EligibilityService = EligibilityService;
//# sourceMappingURL=service.js.map