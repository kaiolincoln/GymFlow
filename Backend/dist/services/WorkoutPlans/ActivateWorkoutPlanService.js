"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateWorkoutPlanService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ActivateWorkoutPlanService {
    async execute(id) {
        const plan = await index_1.default.workoutPlan.findUnique({ where: { id } });
        if (!plan) {
            throw new Error('Ficha não encontrada.');
        }
        await index_1.default.workoutPlan.updateMany({
            where: { studentId: plan.studentId },
            data: { active: false },
        });
        await index_1.default.workoutPlan.update({
            where: { id },
            data: { active: true },
        });
    }
}
exports.ActivateWorkoutPlanService = ActivateWorkoutPlanService;
//# sourceMappingURL=ActivateWorkoutPlanService.js.map