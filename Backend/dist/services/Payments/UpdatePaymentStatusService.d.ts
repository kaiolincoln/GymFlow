interface UpdatePaymentStatusRequest {
    id: string;
    status: 'PAID' | 'PENDING' | 'OVERDUE';
}
export declare class UpdatePaymentStatusService {
    execute({ id, status }: UpdatePaymentStatusRequest): Promise<{
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
//# sourceMappingURL=UpdatePaymentStatusService.d.ts.map