interface UpdateProfileRequest {
    userId: string;
    name?: string;
    email?: string;
}
export declare class UpdateProfileService {
    execute({ userId, name, email }: UpdateProfileRequest): Promise<{
        name: string;
        id: string;
        email: string;
        role: import("../../../generated/prisma").$Enums.Role;
    }>;
}
export {};
//# sourceMappingURL=UpdateProfileService.d.ts.map