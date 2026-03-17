"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentController = void 0;
const zod_1 = require("zod");
const CreatePaymentService_1 = require("../../services/Payments/CreatePaymentService");
const createPaymentSchema = zod_1.z.object({
    amount: zod_1.z.number().positive('Valor deve ser positivo'),
    dueDate: zod_1.z.string(),
    note: zod_1.z.string().optional(),
});
class CreatePaymentController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const parsed = createPaymentSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new CreatePaymentService_1.CreatePaymentService();
        try {
            const payment = await service.execute({ studentId: studentId, ...parsed.data });
            return res.status(201).json(payment);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.CreatePaymentController = CreatePaymentController;
//# sourceMappingURL=CreatePaymentController.js.map