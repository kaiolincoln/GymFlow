export declare class ListPaymentsByStudentService {
    execute(studentId: string): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        status: import("../../../generated/prisma").$Enums.PaymentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paidAt: Date | null;
        note: string | null;
    }[]>;
}
//# sourceMappingURL=ListPaymentsByStudentService.d.ts.map