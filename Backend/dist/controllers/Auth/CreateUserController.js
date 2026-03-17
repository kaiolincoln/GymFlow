"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const zod_1 = require("zod");
const CreateUserService_1 = require("../../services/Auth/CreateUserService");
const createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Nome muito curto'),
    email: zod_1.z.string().email('Email inválido'),
    password: zod_1.z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    role: zod_1.z.enum(['ADMIN', 'PERSONAL', 'STUDENT']).optional(),
});
class CreateUserController {
    async handle(req, res) {
        const parsed = createUserSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new CreateUserService_1.CreateUserService();
        try {
            const user = await service.execute(parsed.data);
            return res.status(201).json(user);
        }
        catch (err) {
            return res.status(409).json({ error: err.message });
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map