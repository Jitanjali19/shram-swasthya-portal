import { Response } from 'express';
import { ApiResponse } from '../types';
export declare const createApiResponse: <T>(success: boolean, message: string, data?: T, error?: string) => ApiResponse<T>;
export declare const sendSuccess: <T>(res: Response, message: string, data?: T, statusCode?: number) => void;
export declare const sendError: (res: Response, message: string, error?: string, statusCode?: number) => void;
export declare const asyncHandler: (fn: Function) => (req: any, res: any, next: any) => Promise<any>;
export declare const maskId: (id: string) => string;
export declare const generatePatientReportId: (stateCode?: string) => string;
export declare const generateQRCode: (data: string) => Promise<string>;
export declare const generateUUID: () => string;
export declare const calculateAge: (dob: Date) => number;
export declare const isEligibleForCheckup: (lastCheckupDate: Date | null | undefined) => boolean;
//# sourceMappingURL=index.d.ts.map