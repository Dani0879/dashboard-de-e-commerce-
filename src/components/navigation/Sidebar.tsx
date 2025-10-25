import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUI } from '../../context/UIContext'

const linkBase = 'flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800'

export function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useUI()

  return (
    <aside className={
      `${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-20 w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-transform`
    }>
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold">Menú</span>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setSidebarOpen(false)} aria-label="Cerrar menú">
          ✕
        </button>
      </div>
      <nav className="space-y-1">
        <NavLink to="/dashboard" className={({ isActive }: { isActive: boolean }) => `${linkBase} ${isActive ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}`}>📊 Dashboard</NavLink>
        <NavLink to="/products" className={({ isActive }: { isActive: boolean }) => `${linkBase} ${isActive ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}`}>🛒 Productos</NavLink>
        <NavLink to="/settings" className={({ isActive }: { isActive: boolean }) => `${linkBase} ${isActive ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}`}>⚙️ Ajustes</NavLink>
      </nav>
    </aside>
  )
}
