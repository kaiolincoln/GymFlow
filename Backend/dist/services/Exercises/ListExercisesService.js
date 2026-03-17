"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExercisesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListExercisesService {
    async execute() {
        const exercises = await prisma_1.default.exercise.findMany({
            select: {
                id: true,
                name: true,
                muscleGroup: true,
                description: true,
                gifUrl: true
            }
        });
        return exercises;
    }
}
exports.ListExercisesService = ListExercisesService;
//# sourceMappingURL=ListExercisesService.js.map