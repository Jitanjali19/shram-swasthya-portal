import { User } from '@prisma/client';
import { CreateUserRequest, UpdateUserRequest, UpdateStatusRequest } from './types';
export declare class UserService {
    createUser(data: CreateUserRequest): Promise<User>;
    getAllUsers(page?: number, limit?: number): Promise<{
        users: User[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getUserById(id: string): Promise<User>;
    updateUser(id: string, data: UpdateUserRequest): Promise<User>;
    softDeleteUser(id: string): Promise<User>;
    changeUserStatus(id: string, payload: UpdateStatusRequest): Promise<User>;
}
//# sourceMappingURL=service.d.ts.map