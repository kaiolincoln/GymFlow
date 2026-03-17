interface CreateBodyRecordInput {
    studentId: string;
    weight?: number;
    height?: number;
    bodyFat?: number;
    notes?: string;
}
export declare class CreateBodyRecordService {
    execute({ studentId, weight, height, bodyFat, notes }: CreateBodyRecordInput): Promise<{
        id: string;
        studentId: string;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        height: import("@prisma/client-runtime-utils").Decimal | null;
        bodyFat: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
        recordedAt: Date;
    }>;
}
export {};
//# sourceMappingURL=CreateBodyRecordService.d.ts.map