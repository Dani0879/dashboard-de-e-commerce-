import React, { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type AuthContextValue = {
  isAuthenticated: boolean
  user: { name: string } | null
  login: (name?: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

type Props = { children: React.ReactNode }
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<{ name: string } | null>(null)
  const navigate = useNavigate()

  const login = (name = 'Invitado') => {
    setUser({ name })
    navigate('/dashboard')
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated: !!user,
    user,
    login,
    logout,
  }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
