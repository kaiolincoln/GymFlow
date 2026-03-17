"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllPaymentsController = void 0;
const ListAllPaymentsService_1 = require("../../services/Payments/ListAllPaymentsService");
class ListAllPaymentsController {
    async handle(req, res) {
        const { status } = req.query;
        const service = new ListAllPaymentsService_1.ListAllPaymentsService();
        const payments = await service.execute({ status: status });
        return res.json(payments);
    }
}
exports.ListAllPaymentsController = ListAllPaymentsController;
//# sourceMappingURL=ListAllPaymentsController.js.map