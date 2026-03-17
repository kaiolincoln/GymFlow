interface CreateStudentRequest {
    name: string;
    email: string;
    password: string;
    phone?: string;
    birthDate?: string;
    goal?: string;
    plan?: 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL';
}
export declare class CreateStudentService {
    execute({ name, email, password, phone, birthDate, goal, plan }: CreateStudentRequest): Promise<{
        id: string | undefined;
        name: string;
        email: string;
        plan: import("../../../generated/prisma").$Enums.PlanType | undefined;
        status: import("../../../generated/prisma").$Enums.StudentStatus | undefined;
        createdAt: Date;
    }>;
}
export {};
//# sourceMappingURL=CreateStudentService.d.ts.map