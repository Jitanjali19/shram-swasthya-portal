import { Request, Response } from 'express';
export declare class UsersController {
    createUser(req: Request, res: Response): Promise<void>;
    getAllUsers(req: Request, res: Response): Promise<void>;
    getUserById(req: Request, res: Response): Promise<void>;
    updateUser(req: Request, res: Response): Promise<void>;
    softDeleteUser(req: Request, res: Response): Promise<void>;
    changeUserStatus(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=controller.d.ts.map