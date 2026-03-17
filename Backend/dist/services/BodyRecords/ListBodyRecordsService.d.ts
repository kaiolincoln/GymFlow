export declare class ListBodyRecordsService {
    execute(studentId: string): Promise<{
        id: string;
        studentId: string;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        height: import("@prisma/client-runtime-utils").Decimal | null;
        bodyFat: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
        recordedAt: Date;
    }[]>;
}
//# sourceMappingURL=ListBodyRecordsService.d.ts.map