"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWorkoutPlanController = void 0;
const DeleteWorkoutPlanService_1 = require("../../services/WorkoutPlans/DeleteWorkoutPlanService");
class DeleteWorkoutPlanController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new DeleteWorkoutPlanService_1.DeleteWorkoutPlanService();
        try {
            await service.execute(id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.DeleteWorkoutPlanController = DeleteWorkoutPlanController;
//# sourceMappingURL=DeleteWorkoutPlanController.js.map