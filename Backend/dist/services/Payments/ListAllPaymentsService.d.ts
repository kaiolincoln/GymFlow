interface ListAllPaymentsRequest {
    status?: string;
}
export declare class ListAllPaymentsService {
    execute({ status }: ListAllPaymentsRequest): Promise<({
        student: {
            user: {
                name: string;
                email: string;
            };
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
        };
    } & {
        id: string;
        createdAt: Date;
        studentId: string;
        status: import("../../../generated/prisma").$Enums.PaymentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paidAt: Date | null;
        note: string | null;
    })[]>;
}
export {};
//# sourceMappingURL=ListAllPaymentsService.d.ts.map