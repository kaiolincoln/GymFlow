"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExerciseService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class UpdateExerciseService {
    async execute({ id, name, muscleGroup, description, gifUrl }) {
        const exercise = await index_1.default.exercise.findUnique({ where: { id } });
        if (!exercise) {
            throw new Error('Exercício não encontrado.');
        }
        const updated = await index_1.default.exercise.update({
            where: { id },
            data: { name, muscleGroup, description, gifUrl },
        });
        return updated;
    }
}
exports.UpdateExerciseService = UpdateExerciseService;
//# sourceMappingURL=UpdateExerciseService.js.map