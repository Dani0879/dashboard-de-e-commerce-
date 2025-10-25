import React from 'react'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'

const products = [
  { id: 1, name: 'Auriculares Pro', price: 129.99 },
  { id: 2, name: 'Teclado Mecánico', price: 89.5 },
  { id: 3, name: 'Monitor 27" 144Hz', price: 279.0 },
  { id: 4, name: 'Mouse Inalámbrico', price: 39.99 },
]

export default function Products() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <Card key={p.id} title={p.name} footer={<Button size="sm">Agregar</Button>}>
            <p className="text-gray-600 dark:text-gray-300">Precio</p>
            <p className="text-xl font-bold">${p.price.toFixed(2)}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
