'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { User } from '@/types'

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
    const { data } = await api.post('/session', { email, password })

    localStorage.setItem('@gymflow:token', data.token)
    localStorage.setItem('@gymflow:user', JSON.stringify(data.user))

    setUser(data.user)
    router.push('/dashboard')
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