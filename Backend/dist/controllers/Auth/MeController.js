"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
const MeService_1 = require("../../services/Auth/MeService");
class MeController {
    async handle(req, res) {
        const service = new MeService_1.MeService();
        try {
            const user = await service.execute(req.userId);
            return res.json(user);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.MeController = MeController;
//# sourceMappingURL=MeController.js.map