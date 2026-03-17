"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkoutPlanService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
const AppError_1 = require("../../errors/AppError");
class GetWorkoutPlanService {
    async execute(id) {
        const plan = await index_1.default.workoutPlan.findUnique({
            where: { id },
            include: {
                student: { include: { user: true } },
                days: {
                    orderBy: { order: 'asc' },
                    include: {
                        exercises: {
                            orderBy: { order: 'asc' },
                            include: { exercise: true },
                        },
                    },
                },
            },
        });
        if (!plan)
            throw new AppError_1.AppError('Ficha não encontrada', 404);
        return plan;
    }
}
exports.GetWorkoutPlanService = GetWorkoutPlanService;
//# sourceMappingURL=GetWorkoutPlanService.js.map