"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutPlanController = void 0;
const zod_1 = require("zod");
const UpdateWorkoutPlanService_1 = require("../../services/WorkoutPlans/UpdateWorkoutPlanService");
const updateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    description: zod_1.z.string().optional(),
});
class UpdateWorkoutPlanController {
    async handle(req, res) {
        const { id } = req.params;
        const parsed = updateSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new UpdateWorkoutPlanService_1.UpdateWorkoutPlanService();
        try {
            const plan = await service.execute({ id: id, ...parsed.data });
            return res.json(plan);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.UpdateWorkoutPlanController = UpdateWorkoutPlanController;
//# sourceMappingURL=UpdateWorkoutPlanController.js.map