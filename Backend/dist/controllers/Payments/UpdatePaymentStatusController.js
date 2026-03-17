"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentStatusController = void 0;
const zod_1 = require("zod");
const UpdatePaymentStatusService_1 = require("../../services/Payments/UpdatePaymentStatusService");
const updateStatusSchema = zod_1.z.object({
    status: zod_1.z.enum(['PAID', 'PENDING', 'OVERDUE']),
});
class UpdatePaymentStatusController {
    async handle(req, res) {
        const { id } = req.params;
        const parsed = updateStatusSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new UpdatePaymentStatusService_1.UpdatePaymentStatusService();
        try {
            const payment = await service.execute({ id: id, ...parsed.data });
            return res.json(payment);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.UpdatePaymentStatusController = UpdatePaymentStatusController;
//# sourceMappingURL=UpdatePaymentStatusController.js.map