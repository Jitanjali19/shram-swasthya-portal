import { User, UserRole } from '@prisma/client';
export declare class AuthRepository {
    findUserByEmail(email: string): Promise<User | null>;
    findUserById(id: string): Promise<User | null>;
    createUser(data: {
        fullName: string;
        email: string;
        phone: string;
        passwordHash: string;
        role: UserRole;
    }): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User>;
}
//# sourceMappingURL=repository.d.ts.map