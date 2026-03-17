"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExerciseService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class DeleteExerciseService {
    async execute(id) {
        const exercise = await index_1.default.exercise.findUnique({ where: { id } });
        if (!exercise) {
            throw new Error('Exercício não encontrado.');
        }
        await index_1.default.exercise.delete({ where: { id } });
    }
}
exports.DeleteExerciseService = DeleteExerciseService;
//# sourceMappingURL=DeleteExerciseService.js.map