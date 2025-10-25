import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Input } from '../components/common/Input'
import { Button } from '../components/common/Button'

export default function Login() {
  const { login } = useAuth()
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen grid place-items-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Iniciar sesión</h1>
        <div className="space-y-4">
          <Input label="Nombre" placeholder="Tu nombre" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          <Button onClick={() => login(name || undefined)} className="w-full">Entrar</Button>
        </div>
      </div>
    </div>
  )
}
