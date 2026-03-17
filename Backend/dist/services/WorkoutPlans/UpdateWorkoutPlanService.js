"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutPlanService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
const AppError_1 = require("../../errors/AppError");
class UpdateWorkoutPlanService {
    async execute({ id, name, description, days }) {
        const existing = await index_1.default.workoutPlan.findUnique({ where: { id } });
        if (!existing)
            throw new AppError_1.AppError('Ficha não encontrada', 404);
        if (days !== undefined) {
            await index_1.default.workoutDay.deleteMany({ where: { workoutPlanId: id } });
        }
        const plan = await index_1.default.workoutPlan.update({
            where: { id },
            data: {
                ...(name !== undefined && { name }),
                ...(description !== undefined && { description }),
                ...(days !== undefined && {
                    days: {
                        create: days.map((day) => ({
                            label: day.label,
                            order: day.order,
                            exercises: {
                                create: day.exercises.map((ex) => ({
                                    exerciseId: ex.exerciseId,
                                    sets: ex.sets,
                                    reps: ex.reps,
                                    load: ex.load,
                                    rest: ex.rest,
                                    order: ex.order,
                                })),
                            },
                        })),
                    },
                }),
            },
            include: {
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
        return plan;
    }
}
exports.UpdateWorkoutPlanService = UpdateWorkoutPlanService;
//# sourceMappingURL=UpdateWorkoutPlanService.js.map