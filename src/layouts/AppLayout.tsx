import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navigation/Navbar'
import { Sidebar } from '../components/navigation/Sidebar'

export function AppLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Navbar />
      <div className="container-responsive grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-6 py-6">
        <Sidebar />
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
