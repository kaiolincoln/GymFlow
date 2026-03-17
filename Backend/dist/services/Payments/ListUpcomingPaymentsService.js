"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUpcomingPaymentsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListUpcomingPaymentsService {
    async execute() {
        const today = new Date();
        const in7Days = new Date();
        in7Days.setDate(today.getDate() + 7);
        const payments = await index_1.default.payment.findMany({
            where: {
                status: 'PENDING',
                dueDate: { gte: today, lte: in7Days },
            },
            include: {
                student: {
                    include: { user: { select: { name: true, email: true } } },
                },
            },
            orderBy: { dueDate: 'asc' },
        });
        return payments;
    }
}
exports.ListUpcomingPaymentsService = ListUpcomingPaymentsService;
//# sourceMappingURL=ListUpcomingPaymentsService.js.map