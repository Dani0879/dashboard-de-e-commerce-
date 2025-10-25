import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type UIContextValue = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const UIContext = createContext<UIContextValue | undefined>(undefined)

export const useUI = () => {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within UIProvider')
  return ctx
}

type Props = { children: React.ReactNode }
export function UIProvider({ children }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  const toggleTheme = () => setTheme((t: 'light' | 'dark') => (t === 'light' ? 'dark' : 'light'))

  const value = useMemo<UIContextValue>(() => ({
    theme,
    toggleTheme,
    sidebarOpen,
    setSidebarOpen,
  }), [theme, sidebarOpen])

  // Sincroniza la clase "dark" en <html> para que Tailwind la detecte
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
