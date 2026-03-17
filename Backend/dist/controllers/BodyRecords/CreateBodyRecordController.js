"use strict";
// ─── CreateBodyRecordController.ts ───────────────────────────────────────────
// Salvar em: src/controllers/BodyRecords/CreateBodyRecordController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBodyRecordController = void 0;
const zod_1 = require("zod");
const CreateBodyRecordService_1 = require("../../services/BodyRecords/CreateBodyRecordService");
const schema = zod_1.z.object({
    weight: zod_1.z.number().positive().optional(),
    height: zod_1.z.number().positive().optional(),
    bodyFat: zod_1.z.number().min(0).max(100).optional(),
    notes: zod_1.z.string().optional(),
});
class CreateBodyRecordController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new CreateBodyRecordService_1.CreateBodyRecordService();
        try {
            const record = await service.execute({ studentId: studentId, ...parsed.data });
            return res.status(201).json(record);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
exports.CreateBodyRecordController = CreateBodyRecordController;
//# sourceMappingURL=CreateBodyRecordController.js.map