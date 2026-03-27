import { LoginRequest, RegisterRequest, AuthResponse } from './types';
export declare class AuthService {
    login(credentials: LoginRequest): Promise<AuthResponse>;
    register(data: RegisterRequest): Promise<AuthResponse>;
    me(userId: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        phone: string;
        role: import(".prisma/client").$Enums.UserRole;
        status: import(".prisma/client").$Enums.UserStatus;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    changePassword(userId: string, payload: {
        currentPassword: string;
        newPassword: string;
    }): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=service.d.ts.map