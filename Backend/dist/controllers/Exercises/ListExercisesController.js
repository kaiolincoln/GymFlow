"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExercisesController = void 0;
const ListExercisesService_1 = require("../../services/Exercises/ListExercisesService");
class ListExercisesController {
    async handle(req, res) {
        const service = new ListExercisesService_1.ListExercisesService();
        const exercises = await service.execute();
        return res.json(exercises);
    }
}
exports.ListExercisesController = ListExercisesController;
//# sourceMappingURL=ListExercisesController.js.map