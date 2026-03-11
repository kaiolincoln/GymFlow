
// ─── Auth ───────────────────────────────────────────────────
export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'PERSONAL' | 'STUDENT'
  createdAt: string
}

export interface SessionResponse {
  token: string
  user: User
}

// ─── Students ───────────────────────────────────────────────
export type StudentStatus = 'ACTIVE' | 'INACTIVE' | 'OVERDUE'
export type PlanType = 'MONTHLY' | 'QUARTERLY' | 'SEMIANNUAL' | 'ANNUAL'

export interface Student {
  id: string
  userId: string
  phone?: string
  birthDate?: string
  goal?: string
  plan: PlanType
  status: StudentStatus
  createdAt: string
  updatedAt: string
  user: {
    name: string
    email: string
  }
  _count?: {
    payments: number
    workoutPlans: number
  }
}

export interface StudentDetail extends Student {
  payments: Payment[]
  workoutPlans: WorkoutPlan[]
  bodyRecords: BodyRecord[]
}

export interface ListStudentsResponse {
  students: Student[]
  total: number
  page: number
  limit: number
}

// ─── Payments ───────────────────────────────────────────────
export type PaymentStatus = 'PAID' | 'PENDING' | 'OVERDUE'

export interface Payment {
  id: string
  studentId: string
  amount: number
  dueDate: string
  paidAt?: string
  status: PaymentStatus
  note?: string
  createdAt: string
}

// ─── WorkoutPlans ────────────────────────────────────────────
export interface WorkoutPlan {
  id: string
  studentId: string
  createdById: string
  name: string
  description?: string
  active: boolean
  createdAt: string
  updatedAt: string
  createdBy?: { name: string }
  exercises?: WorkoutExercise[]
  _count?: { exercises: number }
}

export interface WorkoutExercise {
  id: string
  workoutPlanId: string
  exerciseId: string
  sets: number
  reps: string
  load?: string
  rest?: string
  order: number
  exercise: Exercise
}

// ─── Exercises ───────────────────────────────────────────────
export interface Exercise {
  id: string
  name: string
  muscleGroup: string
  description?: string
  createdAt: string
}

// ─── BodyRecord ──────────────────────────────────────────────
export interface BodyRecord {
  id: string
  studentId: string
  weight?: number
  height?: number
  bodyFat?: number
  notes?: string
  recordedAt: string
}

// ─── Dashboard ───────────────────────────────────────────────
export interface DashboardMetrics {
  totalActive: number
  totalOverdue: number
  newStudentsThisMonth: number
  revenueThisMonth: number
  revenueLastMonth: number
}