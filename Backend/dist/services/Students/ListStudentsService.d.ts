interface ListStudentsRequest {
    status?: string;
    plan?: string;
    search?: string;
    page?: number;
    limit?: number;
}
export declare class ListStudentsService {
    execute({ status, plan, search, page, limit }: ListStudentsRequest): Promise<{
        students: ({
            user: {
                name: string;
                email: string;
            };
            _count: {
                payments: number;
                workoutPlans: number;
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
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
}
export {};
//# sourceMappingURL=ListStudentsService.d.ts.map