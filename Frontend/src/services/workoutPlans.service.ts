import { api } from '@/lib/api'
import { WorkoutPlan } from '@/types'

interface WorkoutExercisePayload {
  exerciseId: string
  sets: number
  reps: string
  load?: string
  rest?: string
  order: number
}

interface CreateWorkoutPlanPayload {
  name: string
  description?: string
  exercises?: WorkoutExercisePayload[]
}

export const workoutPlansService = {
  async listByStudent(studentId: string): Promise<WorkoutPlan[]> {
    const { data } = await api.get(`/students/${studentId}/workout-plans`)
    return data
  },

  async getById(id: string): Promise<WorkoutPlan> {
    const { data } = await api.get(`/workout-plans/${id}`)
    return data
  },

  async create(studentId: string, payload: CreateWorkoutPlanPayload): Promise<WorkoutPlan> {
    const { data } = await api.post(`/students/${studentId}/workout-plans`, payload)
    return data
  },

  async update(id: string, payload: { name?: string; description?: string }): Promise<WorkoutPlan> {
    const { data } = await api.put(`/workout-plans/${id}`, payload)
    return data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/workout-plans/${id}`)
  },

  async activate(id: string): Promise<void> {
    await api.patch(`/workout-plans/${id}/activate`)
  },
}