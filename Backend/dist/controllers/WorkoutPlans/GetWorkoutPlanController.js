"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkoutPlanController = void 0;
const GetWorkoutPlanService_1 = require("../../services/WorkoutPlans/GetWorkoutPlanService");
class GetWorkoutPlanController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new GetWorkoutPlanService_1.GetWorkoutPlanService();
        try {
            const plan = await service.execute(id);
            return res.json(plan);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.GetWorkoutPlanController = GetWorkoutPlanController;
//# sourceMappingURL=GetWorkoutPlanController.js.map