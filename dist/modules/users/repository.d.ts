import { User, UserStatus } from '@prisma/client';
export declare class UserRepository {
    create(data: {
        fullName: string;
        email: string;
        phone: string;
        passwordHash: string;
        role: User['role'];
        status?: UserStatus;
        isActive?: boolean;
    }): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(options?: {
        skip?: number;
        take?: number;
        where?: Record<string, any>;
    }): Promise<User[]>;
    count(options?: {
        where?: Record<string, any>;
    }): Promise<number>;
    update(id: string, data: Partial<User>): Promise<User>;
    softDelete(id: string): Promise<User>;
}
//# sourceMappingURL=repository.d.ts.map