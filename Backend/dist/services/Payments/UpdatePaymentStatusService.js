"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentStatusService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class UpdatePaymentStatusService {
    async execute({ id, status }) {
        const payment = await index_1.default.payment.findUnique({ where: { id } });
        if (!payment) {
            throw new Error('Pagamento não encontrado.');
        }
        const updated = await index_1.default.payment.update({
            where: { id },
            data: {
                status,
                paidAt: status === 'PAID' ? new Date() : null,
            },
        });
        if (status === 'PAID') {
            await index_1.default.student.update({
                where: { id: payment.studentId },
                data: { status: 'ACTIVE' },
            });
        }
        return updated;
    }
}
exports.UpdatePaymentStatusService = UpdatePaymentStatusService;
//# sourceMappingURL=UpdatePaymentStatusService.js.map