export interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "PERSONAL" | "STUDENT";
  studentId: string | null;
  createdAt?: string;
}

export interface Student {
  id: string;
  userId: string;
  user: { id: string; name: string; email: string };
  phone?: string | null;
  birthDate?: string | null;
  goal?: string | null;
  plan: "MONTHLY" | "QUARTERLY" | "SEMIANNUAL" | "ANNUAL";
  status: "ACTIVE" | "INACTIVE" | "OVERDUE";
  createdAt: string;
  updatedAt: string;
  payments?: Payment[];
  bodyRecords?: BodyRecord[];
  workoutPlans?: WorkoutPlan[];
  _count?: { workoutPlans: number; payments: number };
}

export interface Payment {
  id: string;
  studentId: string;
  student?: { user: { name: string } };
  amount: string | number;
  dueDate: string;
  paidAt?: string | null;
  status: "PAID" | "PENDING" | "OVERDUE";
  note?: string | null;
  createdAt: string;
}

export interface WorkoutPlan {
  id: string;
  studentId: string;
  createdById: string;
  name: string;
  description?: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  exercises?: WorkoutExercise[];
  student?: { user: { name: string } };
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  description?: string | null;
  gifUrl?: string | null;
  createdAt: string;
}

export interface WorkoutExercise {
  id: string;
  exerciseId: string;
  exercise: Exercise;
  sets: number;
  reps: string;
  load?: string | null;
  rest?: string | null;
  order: number;
}

export interface BodyRecord {
  id: string;
  studentId: string;
  weight?: string | number | null;
  height?: string | number | null;
  bodyFat?: string | number | null;
  notes?: string | null;
  recordedAt: string;
}


export interface DashboardMetrics {
  totalActive: number;
  totalOverdue: number;
  newStudentsThisMonth: number;
  revenueThisMonth: number;
  revenueLastMonth: number;
}

export interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  limit: number;
}