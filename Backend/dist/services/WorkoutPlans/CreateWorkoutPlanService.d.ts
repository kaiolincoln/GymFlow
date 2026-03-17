interface ExerciseInput {
    exerciseId: string;
    sets: number;
    reps: string;
    load?: string;
    rest?: string;
    order: number;
}
interface DayInput {
    label: string;
    order: number;
    exercises: ExerciseInput[];
}
interface CreateWorkoutPlanInput {
    studentId: string;
    createdById: string;
    name: string;
    description?: string;
    days: DayInput[];
}
export declare class CreateWorkoutPlanService {
    execute({ studentId, createdById, name, description, days }: CreateWorkoutPlanInput): Promise<{
        days: ({
            exercises: ({
                exercise: {
                    name: string;
                    id: string;
                    createdAt: Date;
                    description: string | null;
                    muscleGroup: string;
                    gifUrl: string | null;
                };
            } & {
                id: string;
                order: number;
                workoutDayId: string;
                exerciseId: string;
                sets: number;
                reps: string;
                load: string | null;
                rest: string | null;
            })[];
        } & {
            id: string;
            workoutPlanId: string;
            label: string;
            order: number;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        createdById: string;
        description: string | null;
        active: boolean;
    }>;
}
export {};
//# sourceMappingURL=CreateWorkoutPlanService.d.ts.map