import { Request, Response } from 'express';
export declare class AuthController {
    login(req: Request, res: Response): Promise<void>;
    register(req: Request, res: Response): Promise<void>;
    me(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    changePassword(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=controller.d.ts.map