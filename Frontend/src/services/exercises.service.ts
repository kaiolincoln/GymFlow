import { api } from '@/lib/api'
import { Exercise } from '@/types'

export const exercisesService = {
  async list(params?: { search?: string; muscleGroup?: string }): Promise<Exercise[]> {
    const { data } = await api.get('/exercises', { params })
    return data
  },

  async create(payload: { name: string; muscleGroup: string; description?: string }): Promise<Exercise> {
    const { data } = await api.post('/exercises', payload)
    return data
  },

  async update(id: string, payload: { name?: string; muscleGroup?: string; description?: string }): Promise<Exercise> {
    const { data } = await api.put(`/exercises/${id}`, payload)
    return data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/exercises/${id}`)
  },
}