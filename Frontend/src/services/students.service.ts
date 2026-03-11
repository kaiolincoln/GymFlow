import { api } from '@/lib/api'
import { Student, StudentDetail, ListStudentsResponse } from '@/types'

interface ListStudentsParams {
  status?: string
  plan?: string
  search?: string
  page?: number
  limit?: number
}

interface CreateStudentPayload {
  name: string
  email: string
  password: string
  phone?: string
  birthDate?: string
  goal?: string
  plan?: string
}

export const studentsService = {
  async list(params?: ListStudentsParams): Promise<ListStudentsResponse> {
    const { data } = await api.get('/students', { params })
    return data
  },

  async getById(id: string): Promise<StudentDetail> {
    const { data } = await api.get(`/students/${id}`)
    return data
  },

  async listOverdue(): Promise<Student[]> {
    const { data } = await api.get('/students/overdue')
    return data
  },

  async create(payload: CreateStudentPayload): Promise<Student> {
    const { data } = await api.post('/students', payload)
    return data
  },

  async update(id: string, payload: Partial<CreateStudentPayload & { status: string }>): Promise<void> {
    await api.put(`/students/${id}`, payload)
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/students/${id}`)
  },
}