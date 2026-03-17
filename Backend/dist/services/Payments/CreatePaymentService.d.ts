interface CreatePaymentRequest {
    studentId: string;
    amount: number;
    dueDate: string;
    note?: string;
}
export declare class CreatePaymentService {
    execute({ studentId, amount, dueDate, note }: CreatePaymentRequest): Promise<{
        id: string;
        createdAt: Date;
        studentId: string;
        status: import("../../../generated/prisma").$Enums.PaymentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paidAt: Date | null;
        note: string | null;
    }>;
}
export {};
//# sourceMappingURL=CreatePaymentService.d.ts.map