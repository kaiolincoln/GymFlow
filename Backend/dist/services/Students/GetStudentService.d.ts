export declare class GetStudentService {
    execute(id: string): Promise<{
        user: {
            name: string;
            email: string;
        };
        payments: {
            id: string;
            createdAt: Date;
            studentId: string;
            status: import("../../../generated/prisma").$Enums.PaymentStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            dueDate: Date;
            paidAt: Date | null;
            note: string | null;
        }[];
        bodyRecords: {
            id: string;
            studentId: string;
            weight: import("@prisma/client-runtime-utils").Decimal | null;
            height: import("@prisma/client-runtime-utils").Decimal | null;
            bodyFat: import("@prisma/client-runtime-utils").Decimal | null;
            notes: string | null;
            recordedAt: Date;
        }[];
        workoutPlans: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            createdById: string;
            description: string | null;
            active: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        phone: string | null;
        birthDate: Date | null;
        goal: string | null;
        plan: import("../../../generated/prisma").$Enums.PlanType;
        status: import("../../../generated/prisma").$Enums.StudentStatus;
    }>;
}
//# sourceMappingURL=GetStudentService.d.ts.map