interface UpdateStudentRequest {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    birthDate?: string;
    goal?: string;
    plan?: 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL';
    status?: 'ACTIVE' | 'INACTIVE' | 'OVERDUE';
}
export declare class UpdateStudentService {
    execute({ id, name, email, phone, birthDate, goal, plan, status }: UpdateStudentRequest): Promise<void>;
}
export {};
//# sourceMappingURL=UpdateStudentService.d.ts.map