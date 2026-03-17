"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWorkoutPlanService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class DeleteWorkoutPlanService {
    async execute(id) {
        const plan = await index_1.default.workoutPlan.findUnique({ where: { id } });
        if (!plan) {
            throw new Error('Ficha não encontrada.');
        }
        await index_1.default.workoutPlan.delete({ where: { id } });
    }
}
exports.DeleteWorkoutPlanService = DeleteWorkoutPlanService;
//# sourceMappingURL=DeleteWorkoutPlanService.js.map