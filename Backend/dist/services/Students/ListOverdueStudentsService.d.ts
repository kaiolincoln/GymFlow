export declare class ListOverdueStudentsService {
    execute(): Promise<({
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
    })[]>;
}
//# sourceMappingURL=ListOverdueStudentsService.d.ts.map