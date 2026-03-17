"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutPlanController = void 0;
const zod_1 = require("zod");
const CreateWorkoutPlanService_1 = require("../../services/WorkoutPlans/CreateWorkoutPlanService");
const exerciseSchema = zod_1.z.object({
    exerciseId: zod_1.z.string().uuid(),
    sets: zod_1.z.number().int().positive(),
    reps: zod_1.z.string(),
    load: zod_1.z.string().optional(),
    rest: zod_1.z.string().optional(),
    order: zod_1.z.number().int(),
});
const daySchema = zod_1.z.object({
    label: zod_1.z.string().min(1),
    order: zod_1.z.number().int(),
    exercises: zod_1.z.array(exerciseSchema).default([]),
});
const createWorkoutPlanSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    description: zod_1.z.string().optional(),
    days: zod_1.z.array(daySchema).default([]),
});
class CreateWorkoutPlanController {
    async handle(req, res) {
        const { id: studentId } = req.params;
        const parsed = createWorkoutPlanSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new CreateWorkoutPlanService_1.CreateWorkoutPlanService();
        try {
            const plan = await service.execute({
                studentId: studentId,
                createdById: req.userId,
                ...parsed.data,
            });
            return res.status(201).json(plan);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.CreateWorkoutPlanController = CreateWorkoutPlanController;
//# sourceMappingURL=CreateWorkoutPlanController.js.map