interface CreateExerciseRequest {
    name: string;
    muscleGroup: string;
    description?: string;
    gifUrl?: string;
}
export declare class CreateExerciseService {
    execute({ name, muscleGroup, description, gifUrl }: CreateExerciseRequest): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        description: string | null;
        muscleGroup: string;
        gifUrl: string | null;
    }>;
}
export {};
//# sourceMappingURL=CreateExerciseService.d.ts.map