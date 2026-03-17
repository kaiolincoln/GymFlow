"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const zod_1 = require("zod");
const SessionService_1 = require("../../services/Auth/SessionService");
const sessionSchema = zod_1.z.object({
    email: zod_1.z.string().email('Email inválido'),
    password: zod_1.z.string().min(1, 'Senha obrigatória'),
});
class SessionController {
    async handle(req, res) {
        const parsed = sessionSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new SessionService_1.SessionService();
        try {
            const result = await service.execute(parsed.data);
            return res.json(result);
        }
        catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
}
exports.SessionController = SessionController;
//# sourceMappingURL=SessionController.js.map