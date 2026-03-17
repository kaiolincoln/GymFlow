interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
    role?: 'ADMIN' | 'PERSONAL' | 'STUDENT';
}
export declare class CreateUserService {
    execute({ name, email, password, role }: CreateUserRequest): Promise<{
        name: string;
        id: string;
        email: string;
        role: import("../../../generated/prisma").$Enums.Role;
        createdAt: Date;
    }>;
}
export {};
//# sourceMappingURL=CreateUserService.d.ts.map