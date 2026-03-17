"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardMetricsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class DashboardMetricsService {
    async execute() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        const [totalActive, totalOverdue, newStudentsThisMonth, revenueThisMonth, revenueLastMonth, paidPaymentsLast6Months, studentsLast6Months,] = await Promise.all([
            index_1.default.student.count({ where: { status: 'ACTIVE' } }),
            index_1.default.student.count({ where: { status: 'OVERDUE' } }),
            index_1.default.student.count({ where: { createdAt: { gte: startOfMonth } } }),
            index_1.default.payment.aggregate({
                where: { status: 'PAID', paidAt: { gte: startOfMonth } },
                _sum: { amount: true },
            }),
            index_1.default.payment.aggregate({
                where: { status: 'PAID', paidAt: { gte: startOfLastMonth, lte: endOfLastMonth } },
                _sum: { amount: true },
            }),
            index_1.default.payment.findMany({
                where: {
                    status: 'PAID',
                    paidAt: { gte: sixMonthsAgo },
                },
                select: { paidAt: true, amount: true },
            }),
            index_1.default.student.findMany({
                where: {
                    createdAt: { gte: sixMonthsAgo },
                },
                select: { createdAt: true, status: true },
            }),
        ]);
        const monthlyData = Array.from({ length: 6 }, (_, i) => {
            const date = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1);
            const year = date.getFullYear();
            const month = date.getMonth();
            const monthLabel = date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
            const revenue = paidPaymentsLast6Months
                .filter(p => {
                const d = new Date(p.paidAt);
                return d.getFullYear() === year && d.getMonth() === month;
            })
                .reduce((sum, p) => sum + Number(p.amount), 0);
            const newStudents = studentsLast6Months.filter(s => {
                const d = new Date(s.createdAt);
                return d.getFullYear() === year && d.getMonth() === month;
            }).length;
            return { month: monthLabel, revenue, newStudents };
        });
        return {
            totalActive,
            totalOverdue,
            newStudentsThisMonth,
            revenueThisMonth: revenueThisMonth._sum.amount ?? 0,
            revenueLastMonth: revenueLastMonth._sum.amount ?? 0,
            monthlyData,
        };
    }
}
exports.DashboardMetricsService = DashboardMetricsService;
//# sourceMappingURL=DashBoardMetricsService.js.map