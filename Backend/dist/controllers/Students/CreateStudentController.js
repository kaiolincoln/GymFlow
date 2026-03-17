"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentController = void 0;
const zod_1 = require("zod");
const CreateStudentService_1 = require("../../services/Students/CreateStudentService");
const createStudentSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    phone: zod_1.z.string().optional(),
    birthDate: zod_1.z.string().optional(),
    goal: zod_1.z.string().optional(),
    plan: zod_1.z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUAL', 'ANNUAL']).optional(),
});
class CreateStudentController {
    async handle(req, res) {
        const parsed = createStudentSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new CreateStudentService_1.CreateStudentService();
        try {
            const student = await service.execute(parsed.data);
            return res.status(201).json(student);
        }
        catch (err) {
            return res.status(409).json({ error: err.message });
        }
    }
}
exports.CreateStudentController = CreateStudentController;
//# sourceMappingURL=CreateStudentController.js.map