"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExerciseController = void 0;
const zod_1 = require("zod");
const UpdateExerciseService_1 = require("../../services/Exercises/UpdateExerciseService");
const updateExerciseSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    muscleGroup: zod_1.z.string().min(2).optional(),
    description: zod_1.z.string().optional(),
    gifUrl: zod_1.z.string().url().optional(),
});
class UpdateExerciseController {
    async handle(req, res) {
        const { id } = req.params;
        const parsed = updateExerciseSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
        }
        const service = new UpdateExerciseService_1.UpdateExerciseService();
        try {
            const exercise = await service.execute({ id: id, ...parsed.data });
            return res.json(exercise);
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.UpdateExerciseController = UpdateExerciseController;
//# sourceMappingURL=UpdateExerciseController.js.map