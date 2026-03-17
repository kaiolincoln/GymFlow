"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllPaymentsService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListAllPaymentsService {
    async execute({ status }) {
        const payments = await index_1.default.payment.findMany({
            where: {
                ...(status && status !== 'ALL' ? { status: status } : {}),
            },
            include: {
                student: {
                    include: {
                        user: { select: { name: true, email: true } },
                    },
                },
            },
            orderBy: { dueDate: 'desc' },
        });
        return payments;
    }
}
exports.ListAllPaymentsService = ListAllPaymentsService;
//# sourceMappingURL=ListAllPaymentsService.js.map