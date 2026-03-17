"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutPlanService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class CreateWorkoutPlanService {
    async execute({ studentId, createdById, name, description, days }) {
        const plan = await index_1.default.workoutPlan.create({
            data: {
                studentId,
                createdById,
                name,
                description,
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
exports.CreateWorkoutPlanService = CreateWorkoutPlanService;
//# sourceMappingURL=CreateWorkoutPlanService.js.map