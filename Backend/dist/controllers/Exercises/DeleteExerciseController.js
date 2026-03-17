"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExerciseController = void 0;
const DeleteExerciseService_1 = require("../../services/Exercises/DeleteExerciseService");
class DeleteExerciseController {
    async handle(req, res) {
        const { id } = req.params;
        const service = new DeleteExerciseService_1.DeleteExerciseService();
        try {
            await service.execute(id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}
exports.DeleteExerciseController = DeleteExerciseController;
//# sourceMappingURL=DeleteExerciseController.js.map