export declare class MeService {
    execute(userId: string): Promise<{
        studentId: string | null;
        name: string;
        id: string;
        email: string;
        role: import("../../../generated/prisma").$Enums.Role;
        createdAt: Date;
        student: {
            id: string;
        } | null;
    }>;
}
//# sourceMappingURL=MeService.d.ts.map