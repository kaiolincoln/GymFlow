"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExerciseController = void 0;
const zod_1 = require("zod");
const CreateExerciseService_1 = require("../../services/Exercises/CreateExerciseService");
const exerciseSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    muscleGroup: zod_1.z.string().min(2),
    description: zod_1.z.string().optional(),
    gifUrl: zod_1.z.string().optional() // removi .url()
});
class CreateExerciseController {
    async handle(req, res) {
        const parsed = exerciseSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({
                error: parsed.error.flatten().fieldErrors
            });
        }
        try {
            const service = new CreateExerciseService_1.CreateExerciseService();
            const exercise = await service.execute(parsed.data);
            return res.status(201).json(exercise);
        }
        catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}
exports.CreateExerciseController = CreateExerciseController;
//# sourceMappingURL=CreateExerciseController.js.map