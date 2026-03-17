"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPaymentsByStudentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListPaymentsByStudentService {
    async execute(studentId) {
        const payments = await index_1.default.payment.findMany({
            where: { studentId },
            orderBy: { dueDate: 'desc' },
        });
        return payments;
    }
}
exports.ListPaymentsByStudentService = ListPaymentsByStudentService;
//# sourceMappingURL=ListPaymentsByStudentService.js.map