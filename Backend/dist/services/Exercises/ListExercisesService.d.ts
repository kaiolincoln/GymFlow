declare class ListExercisesService {
    execute(): Promise<{
        name: string;
        id: string;
        description: string | null;
        muscleGroup: string;
        gifUrl: string | null;
    }[]>;
}
export { ListExercisesService };
//# sourceMappingURL=ListExercisesService.d.ts.map