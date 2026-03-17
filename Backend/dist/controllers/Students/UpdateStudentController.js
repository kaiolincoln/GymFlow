"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentController = void 0;
const zod_1 = require("zod");
const UpdateStudentService_1 = require("../../services/Students/UpdateStudentService");
const updateStudentSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    birthDate: zod_1.z.string().optional(),
    goal: zod_1.z.string().optional(),
    plan: zod_1.z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUAL', 'ANNUAL']).optional(),
    status: zod_1.z.enum(['ACTIVE', 'INACTIVE', 'OVERDUE']).optional(),
});
class UpdateStudentController {
    async handle(req, res) {
        const { id } = req.params;
        const parsed = updateStudentSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new UpdateStudentService_1.UpdateStudentService();
        try {
            await service.execute({ id: id, ...parsed.data });
            return res.status(204).send();
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.UpdateStudentController = UpdateStudentController;
//# sourceMappingURL=UpdateStudentController.js.map