interface UpdateExerciseRequest {
    id: string;
    name?: string;
    muscleGroup?: string;
    description?: string;
    gifUrl?: string;
}
export declare class UpdateExerciseService {
    execute({ id, name, muscleGroup, description, gifUrl }: UpdateExerciseRequest): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string | null;
        muscleGroup: string;
        gifUrl: string | null;
    }>;
}
export {};
//# sourceMappingURL=UpdateExerciseService.d.ts.map