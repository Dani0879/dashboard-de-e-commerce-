# Aplicación Web Escalable (React + TypeScript + Tailwind)

Demo (GitHub Pages): https://dani0879.github.io/dashboard-de-e-commerce-/

Acceso rápido: https://dani0879.github.io/dashboard-de-e-commerce-/#/login

Base de arquitectura y diseño visual para una app tipo dashboard de e‑commerce. Enfocada en estructura modular, UI/UX con Tailwind, y rutas funcionales con React Router DOM. No incluye lógica de negocio ni persistencia.

## Tecnologías
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router DOM 6

## Estructura clave
- `src/components` – Componentes reutilizables (Button, Input, Card, Navbar, Sidebar, Badge)
- `src/pages` – Páginas (Login, Dashboard, Products, Settings)
- `src/layouts` – Layouts con navegación (AppLayout)
- `src/context` – Contextos de UI y Auth para simular flujo de datos
- `src/routes` – Rutas protegidas (ProtectedRoute)

## Rutas
- `/login` – Pantalla de acceso (simulada)
- `/dashboard` – Panel principal con métricas
- `/products` – Lista de productos con tarjetas
- `/settings` – Ajustes de la tienda con formulario

## Componentes reutilizables (5+)
- `Button` – Variantes: primary, secondary, ghost; tamaños: sm, md, lg
- `Input` – Con etiqueta y estado de error
- `Card` – Contenedor con título y pie opcionales
- `Navbar` – Encabezado con cambio de tema y sesión
- `Sidebar` – Navegación lateral responsive
- `Badge` – Chip de estado/etiqueta

## Estado y contexto
- `AuthContext` – Autenticación simulada (login/logout) y redirecciones
- `UIContext` – Tema (light/dark) y apertura del sidebar

## Requisitos del entregable cubiertos
- 4 pantallas/rutas funcionales con React Router (`/login` + 3 principales)
- 5+ componentes reutilizables y escalables
- Flujo de datos simple con `useState` y `useContext`
- Enfoque en estructura y modularidad

## Cómo ejecutar (Windows PowerShell)
```powershell
# Instalar dependencias
npm install

# Levantar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## Cómo probar la demo
- Al abrir la demo, te redirigirá a la pantalla de Login.
- Ingresa cualquier nombre y pulsa "Entrar" para ver el dashboard.
- Usa la barra lateral para navegar entre Dashboard, Productos y Ajustes.

## Colaboración
La gestión del trabajo (tareas, bugs, mejoras) se recomienda vía GitHub Issues. Divide por epics y etiquetas (UI, componentes, páginas, accesibilidad, etc.).

## Notas
- Este proyecto no implementa lógica de negocio ni almacenamiento. Sustituye los datos simulados por integraciones reales en fases posteriores.
- Tailwind puede personalizarse en `tailwind.config.js` (paleta, tipografías, spacing, etc.).
