import { api } from '@/lib/api'
import { User } from '@/types'

export const authService = {
  async me(): Promise<User> {
    const { data } = await api.get('/me')
    return data
  },

  async updateProfile(payload: { name?: string; email?: string }): Promise<User> {
    const { data } = await api.put('/me', payload)
    return data
  },

  async changePassword(payload: { currentPassword: string; newPassword: string }): Promise<void> {
    await api.patch('/me/password', payload)
  },
}