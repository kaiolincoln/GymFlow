export declare class GetWorkoutPlanService {
    execute(id: string): Promise<{
        student: {
            user: {
                name: string;
                id: string;
                email: string;
                password: string;
                role: import("../../../generated/prisma").$Enums.Role;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            phone: string | null;
            birthDate: Date | null;
            goal: string | null;
            plan: import("../../../generated/prisma").$Enums.PlanType;
            status: import("../../../generated/prisma").$Enums.StudentStatus;
        };
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
//# sourceMappingURL=GetWorkoutPlanService.d.ts.map