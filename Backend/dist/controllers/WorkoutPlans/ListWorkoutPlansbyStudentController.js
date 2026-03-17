"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkoutPlansByStudentController = void 0;
const ListWorkoutPlansbyStudentService_1 = require("../../services/WorkoutPlans/ListWorkoutPlansbyStudentService");
class ListWorkoutPlansByStudentController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const service = new ListWorkoutPlansbyStudentService_1.ListWorkoutPlansByStudentService();
        const plans = await service.execute(studentId);
        return res.json(plans);
    }
}
exports.ListWorkoutPlansByStudentController = ListWorkoutPlansByStudentController;
//# sourceMappingURL=ListWorkoutPlansbyStudentController.js.map