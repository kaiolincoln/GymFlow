interface SessionRequest {
    email: string;
    password: string;
}
export declare class SessionService {
    execute({ email, password }: SessionRequest): Promise<{
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: import("../../../generated/prisma").$Enums.Role;
            studentId: string | null;
        };
    }>;
}
export {};
//# sourceMappingURL=SessionService.d.ts.map