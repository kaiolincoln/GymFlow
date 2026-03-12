'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { SessionResponse, User } from '@/types'

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('@gymflow:token')
    const storedUser = localStorage.getItem('@gymflow:user')

    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
    }

    setIsLoading(false)
  }, [])

  async function signIn(email: string, password: string) {
    const response = await api.post<SessionResponse>('/session', { email, password })
    const { token, user } = response.data

    alert(`Role: ${user.role} | StudentId: ${user.studentId}`)

    localStorage.setItem('@gymflow:token', token)
    localStorage.setItem('@gymflow:user', JSON.stringify(user))

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setUser(user)

    if (user.role === 'STUDENT') {
      router.push('/minha-area')
    } else {
      router.push('/dashboard')
    }
  }

  function signOut() {
    localStorage.removeItem('@gymflow:token')
    localStorage.removeItem('@gymflow:user')
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}