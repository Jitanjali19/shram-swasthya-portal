"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamagraService = void 0;
const axios_1 = __importDefault(require("axios"));
class SamagraService {
    constructor() {
        this.baseUrl = process.env.AXIOS_SAMAGRA_BASE_URL || 'https://mock-samagra-api.com';
    }
    async fetchIdentity(samagraId) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/identity/${samagraId}`);
            return response.data;
        }
        catch (error) {
            // Fallback mock data
            return {
                name: 'Mock Name',
                dob: '1990-01-01',
                gender: 'Male',
                address: 'Mock Address',
            };
        }
    }
}
exports.SamagraService = SamagraService;
//# sourceMappingURL=SamagraService.js.map