import React from 'react'
import { Card } from '../components/common/Card'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Ventas hoy">
          <p className="text-3xl font-bold">$2,450</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">+12% vs ayer</p>
        </Card>
        <Card title="Pedidos">
          <p className="text-3xl font-bold">128</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">+5 nuevos</p>
        </Card>
        <Card title="Usuarios activos">
          <p className="text-3xl font-bold">1,024</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">+3% vs semana pasada</p>
        </Card>
        <Card title="Tasa de conversión">
          <p className="text-3xl font-bold">3.8%</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">↑ estable</p>
        </Card>
      </div>
    </div>
  )
}
