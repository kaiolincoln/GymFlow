"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileController = void 0;
const zod_1 = require("zod");
const UpdateProfileService_1 = require("../../services/Auth/UpdateProfileService");
const updateProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    email: zod_1.z.string().email().optional(),
});
class UpdateProfileController {
    async handle(req, res) {
        const parsed = updateProfileSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new UpdateProfileService_1.UpdateProfileService();
        try {
            const user = await service.execute({ userId: req.userId, ...parsed.data });
            return res.json(user);
        }
        catch (err) {
            return res.status(409).json({ error: err.message });
        }
    }
}
exports.UpdateProfileController = UpdateProfileController;
//# sourceMappingURL=UpdateProfileController.js.map