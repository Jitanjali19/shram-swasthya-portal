"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEligibleForCheckup = exports.calculateAge = exports.generateUUID = exports.generateQRCode = exports.generatePatientReportId = exports.maskId = exports.asyncHandler = exports.sendError = exports.sendSuccess = exports.createApiResponse = void 0;
const QRCode = __importStar(require("qrcode"));
const uuid_1 = require("uuid");
const createApiResponse = (success, message, data, error) => ({
    success,
    message,
    data,
    error,
});
exports.createApiResponse = createApiResponse;
const sendSuccess = (res, message, data, statusCode = 200) => {
    res.status(statusCode).json((0, exports.createApiResponse)(true, message, data));
};
exports.sendSuccess = sendSuccess;
const sendError = (res, message, error, statusCode = 400) => {
    res.status(statusCode).json((0, exports.createApiResponse)(false, message, undefined, error));
};
exports.sendError = sendError;
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
exports.asyncHandler = asyncHandler;
const maskId = (id) => {
    if (!id || id.length < 4)
        return '****';
    return id.slice(0, 2) + '****' + id.slice(-2);
};
exports.maskId = maskId;
const generatePatientReportId = (stateCode = 'MP') => {
    const randomNum = Math.floor(100 + Math.random() * 900); // 3 digits
    return `${stateCode}-PAT-${randomNum}`;
};
exports.generatePatientReportId = generatePatientReportId;
const generateQRCode = async (data) => {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(data);
        return qrCodeDataURL;
    }
    catch (error) {
        throw new Error('Failed to generate QR code');
    }
};
exports.generateQRCode = generateQRCode;
const generateUUID = () => (0, uuid_1.v4)();
exports.generateUUID = generateUUID;
const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
};
exports.calculateAge = calculateAge;
const isEligibleForCheckup = (lastCheckupDate) => {
    if (!lastCheckupDate)
        return true;
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return lastCheckupDate < oneYearAgo;
};
exports.isEligibleForCheckup = isEligibleForCheckup;
//# sourceMappingURL=index.js.map