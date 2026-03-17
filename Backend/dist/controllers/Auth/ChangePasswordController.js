"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordController = void 0;
const zod_1 = require("zod");
const ChangePasswordService_1 = require("../../services/Auth/ChangePasswordService");
const changePasswordSchema = zod_1.z.object({
    currentPassword: zod_1.z.string().min(1, 'Senha atual obrigatória'),
    newPassword: zod_1.z.string().min(6, 'Nova senha deve ter no mínimo 6 caracteres'),
});
class ChangePasswordController {
    async handle(req, res) {
        const parsed = changePasswordSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new ChangePasswordService_1.ChangePasswordService();
        try {
            await service.execute({ userId: req.userId, ...parsed.data });
            return res.status(204).send();
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
}
exports.ChangePasswordController = ChangePasswordController;
//# sourceMappingURL=ChangePasswordController.js.map