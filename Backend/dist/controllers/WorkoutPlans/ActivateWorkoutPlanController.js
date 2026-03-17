"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateWorkoutPlanController = void 0;
const ActivateWorkoutPlanService_1 = require("../../services/WorkoutPlans/ActivateWorkoutPlanService");
class ActivateWorkoutPlanController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new ActivateWorkoutPlanService_1.ActivateWorkoutPlanService();
        try {
            await service.execute(id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.ActivateWorkoutPlanController = ActivateWorkoutPlanController;
//# sourceMappingURL=ActivateWorkoutPlanController.js.map