# APP-FLUENT-UI

Aplicación React construida con Vite, TypeScript y Fluent UI. Este proyecto incluye autenticación con PocketBase, un dashboard protegido y una pantalla de carga inicial.

## Descripción

APP-FLUENT-UI ofrece una base para aplicaciones web con:
- Login con validación y redirección al dashboard
- Dashboard protegido por sesión
- Sidebar responsive, header y botón flotante en el dashboard
- Pantalla de bienvenida al iniciar la aplicación
- Enrutamiento perezoso con React Router v7
- Integración con PocketBase para autenticación y datos

## Características

- **Autenticación de usuarios**: Login con PocketBase y validación de formulario
- **Dashboard protegido**: Rutas protegidas usando `ProtectedRoute`
- **Fluent UI**: Uso de componentes y estilos de Fluent UI
- **Splash screen**: Carga inicial administrada por contexto
- **Estado global de autenticación**: Hook `useAuth` para datos de sesión
- **Rutas perezosas**: Carga diferida de Login y Dashboard
- **TypeScript**: Tipado en todo el código
- **Vite**: Desarrollo rápido y builds optimizados

## Tecnologías principales

- `react`
- `react-dom`
- `react-router`
- `@fluentui/react-components`
- `pocketbase`
- `typescript`
- `vite`
- `eslint`

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <repository-url>
   cd app-fluent-ui
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia PocketBase si vas a usar la autenticación integrada:
   ```bash
   pocketbase serve
   ```

4. Ajusta la URL de PocketBase en `src/shared/api/pocketbase.ts` si es necesario.

## Uso

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Vista previa
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Estructura del proyecto

```
src/
├── app/
│   ├── AppRouter.tsx
│   ├── Router.tsx
│   └── SplashContext.tsx
├── components/
│   └── Layouts/
│       ├── AuthLayout.tsx
│       └── DashboardLayout.tsx
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginBranding.tsx
│   │   │   └── LoginForm.tsx
│   │   ├── hooks/
│   │   │   └── useLogin.ts
│   │   ├── pages/
│   │   │   └── Login.tsx
│   │   └── styles/
│   │       └── Login.styles.ts
│   └── dashboard/
│       ├── components/
│       │   ├── FabButton/
│       │   │   ├── FabButton.styles.ts
│       │   │   └── FabButton.tsx
│       │   ├── Header/
│       │   │   ├── DashboardHeader.styles.ts
│       │   │   └── DashboardHeader.tsx
│       │   └── Sidebar/
│       │       ├── DashboardSidebar.styles.ts
│       │       └── DashboardSidebar.tsx
│       ├── constants/
│       │   └── menuConfig.tsx
│       ├── contexts/
│       │   └── SidebarContext.tsx
│       └── pages/
│           └── Dashboard.tsx
├── shared/
│   ├── api/
│   │   └── pocketbase.ts
│   ├── components/
│   │   ├── ProtectedRoute/
│   │   │   └── ProtectedRoute.tsx
│   │   └── SplashScreen/
│   │       ├── Splash.styles.ts
│   │       └── SplashScreen.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   └── styles/
├── assets/
├── App.tsx
└── main.tsx
```

## Rutas principales

- `/` — Página de login
- `/dashboard` — Dashboard protegido

## Arquitectura

- **app/**: Router principal y manejo de splash screen
- **components/Layouts/**: Layouts para auth y dashboard
- **features/**: Dominios funcionales (`auth`, `dashboard`)
- **shared/**: Hooks, API y componentes reutilizables
- **assets/**: Contenidos estáticos

## Requisitos

- Node.js 18+ recomendado
- npm 10+ o equivalente
- PocketBase instalado localmente o remoto para el backend de autenticación

## Contribución

1. Haz fork del repositorio
2. Crea una rama nueva: `git checkout -b feature/tu-caracteristica`
3. Realiza tus cambios y prueba la aplicación
4. Confirma tus cambios: `git commit -am 'Agrega alguna característica'`
5. Sube la rama: `git push origin feature/tu-caracteristica`
6. Abre una pull request

## Licencia

Este proyecto es privado y no está licenciado para uso público.
