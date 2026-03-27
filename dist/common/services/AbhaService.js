"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaService = void 0;
const axios_1 = __importDefault(require("axios"));
class AbhaService {
    constructor() {
        this.baseUrl = process.env.AXIOS_ABHA_BASE_URL || 'https://mock-abha-api.com';
    }
    async fetchIdentity(abhaId) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/identity/${abhaId}`);
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
exports.AbhaService = AbhaService;
//# sourceMappingURL=AbhaService.js.map