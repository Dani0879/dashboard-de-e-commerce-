import React, { useState } from 'react'
import { Card } from '../components/common/Card'
import { Input } from '../components/common/Input'
import { Button } from '../components/common/Button'

export default function Settings() {
  const [storeName, setStoreName] = useState('Mi Tienda')
  const [email, setEmail] = useState('admin@tienda.com')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Ajustes</h1>
      <Card title="Información básica" footer={<Button size="sm">Guardar</Button>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Nombre de la tienda" value={storeName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStoreName(e.target.value)} />
          <Input label="Email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        </div>
      </Card>
    </div>
  )
}
