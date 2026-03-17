"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class CreatePaymentService {
    async execute({ studentId, amount, dueDate, note }) {
        const student = await index_1.default.student.findUnique({ where: { id: studentId } });
        if (!student) {
            throw new Error('Aluno não encontrado.');
        }
        const payment = await index_1.default.payment.create({
            data: { studentId, amount, dueDate: new Date(dueDate), note },
        });
        return payment;
    }
}
exports.CreatePaymentService = CreatePaymentService;
//# sourceMappingURL=CreatePaymentService.js.map