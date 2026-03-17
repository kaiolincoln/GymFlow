interface ChangePasswordRequest {
    userId: string;
    currentPassword: string;
    newPassword: string;
}
export declare class ChangePasswordService {
    execute({ userId, currentPassword, newPassword }: ChangePasswordRequest): Promise<void>;
}
export {};
//# sourceMappingURL=ChangePasswordService.d.ts.map