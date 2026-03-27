"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EligibilityController = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const eligibilityService = new service_1.EligibilityService();
class EligibilityController {
    async checkEligibility(req, res) {
        const { patientId } = req.params;
        const result = await eligibilityService.check365DayEligibility(patientId);
        (0, utils_1.sendSuccess)(res, 'Eligibility checked successfully', result);
    }
}
exports.EligibilityController = EligibilityController;
//# sourceMappingURL=controller.js.map