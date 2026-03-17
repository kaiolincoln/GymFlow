"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUpcomingPaymentsController = void 0;
const ListUpcomingPaymentsService_1 = require("../../services/Payments/ListUpcomingPaymentsService");
class ListUpcomingPaymentsController {
    async handle(_req, res) {
        const service = new ListUpcomingPaymentsService_1.ListUpcomingPaymentsService();
        const payments = await service.execute();
        return res.json(payments);
    }
}
exports.ListUpcomingPaymentsController = ListUpcomingPaymentsController;
//# sourceMappingURL=ListUpcomingPaymentsController.js.map