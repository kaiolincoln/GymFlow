"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExerciseService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class CreateExerciseService {
    async execute({ name, muscleGroup, description, gifUrl }) {
        if (!name || !muscleGroup) {
            throw new Error("Name e muscleGroup são obrigatórios");
        }
        const exercise = await index_1.default.exercise.create({
            data: {
                name,
                muscleGroup,
                description: description ?? null,
                gifUrl: gifUrl ?? null
            },
        });
        return exercise;
    }
}
exports.CreateExerciseService = CreateExerciseService;
//# sourceMappingURL=CreateExerciseService.js.map