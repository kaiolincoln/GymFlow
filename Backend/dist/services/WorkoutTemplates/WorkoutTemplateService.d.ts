export interface TemplateExercise {
    exerciseId: string;
    exerciseName: string;
    muscleGroup: string;
    sets: number;
    reps: string;
    load?: string;
    rest?: string;
    order: number;
}
export interface TemplateDay {
    label: string;
    order: number;
    exercises: TemplateExercise[];
}
export interface WorkoutTemplate {
    id: string;
    name: string;
    description?: string;
    createdById: string;
    createdByName: string;
    days: TemplateDay[];
    createdAt: string;
}
export declare class WorkoutTemplateService {
    list(createdById?: string): WorkoutTemplate[];
    create(data: Omit<WorkoutTemplate, 'id' | 'createdAt'>): WorkoutTemplate;
    get(id: string): WorkoutTemplate | undefined;
    delete(id: string, userId: string): boolean;
}
export declare const workoutTemplateService: WorkoutTemplateService;
//# sourceMappingURL=WorkoutTemplateService.d.ts.map