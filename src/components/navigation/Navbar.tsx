import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUI } from '../../context/UIContext'
import { Button } from '../common/Button'

export function Navbar() {
  const { user, logout } = useAuth()
  const { theme, toggleTheme, setSidebarOpen } = useUI()

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
      <div className="container-responsive h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setSidebarOpen(true)} aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="font-semibold">E‑Commerce Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'dark' ? '☀️' : '🌙'}
          </Button>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span>{user?.name}</span>
          </div>
          <Button variant="secondary" onClick={logout}>Salir</Button>
        </div>
      </div>
    </header>
  )
}
