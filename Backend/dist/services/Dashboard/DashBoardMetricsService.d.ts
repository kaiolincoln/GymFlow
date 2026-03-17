export declare class DashboardMetricsService {
    execute(): Promise<{
        totalActive: number;
        totalOverdue: number;
        newStudentsThisMonth: number;
        revenueThisMonth: number | import("@prisma/client-runtime-utils").Decimal;
        revenueLastMonth: number | import("@prisma/client-runtime-utils").Decimal;
        monthlyData: {
            month: string;
            revenue: number;
            newStudents: number;
        }[];
    }>;
}
//# sourceMappingURL=DashBoardMetricsService.d.ts.map