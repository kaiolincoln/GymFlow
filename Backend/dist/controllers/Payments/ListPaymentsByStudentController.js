"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPaymentsByStudentController = void 0;
const ListPaymentsByStudentService_1 = require("../../services/Payments/ListPaymentsByStudentService");
class ListPaymentsByStudentController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const service = new ListPaymentsByStudentService_1.ListPaymentsByStudentService();
        const payments = await service.execute(studentId);
        return res.json(payments);
    }
}
exports.ListPaymentsByStudentController = ListPaymentsByStudentController;
//# sourceMappingURL=ListPaymentsByStudentController.js.map