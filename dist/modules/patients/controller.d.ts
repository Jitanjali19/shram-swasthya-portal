import { Request, Response } from 'express';
export declare class PatientController {
    registerPatient(req: Request, res: Response): Promise<void>;
    getPatientById(req: Request, res: Response): Promise<void>;
    getPatientByQR(req: Request, res: Response): Promise<void>;
    getPatientHistory(req: Request, res: Response): Promise<void>;
    getPatientProfile(req: Request, res: Response): Promise<void>;
    generatePatientQR(req: Request, res: Response): Promise<void>;
    viewOwnReports(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=controller.d.ts.map