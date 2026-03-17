export declare class ListWorkoutPlansByStudentService {
    execute(studentId: string): Promise<({
        _count: {
            days: number;
        };
        createdBy: {
            name: string;
        };
        days: {
            id: string;
            label: string;
            order: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        createdById: string;
        description: string | null;
        active: boolean;
    })[]>;
}
//# sourceMappingURL=ListWorkoutPlansbyStudentService.d.ts.map