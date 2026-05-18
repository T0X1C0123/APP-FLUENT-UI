# APP-FLUENT-UI

Aplicación React construida con Vite, TypeScript y Fluent UI. Esta aplicación ofrece un login con PocketBase, un dashboard protegido con estadísticas y gestión de datos personales.

## Descripción

APP-FLUENT-UI es una base para aplicaciones web empresariales que incluye:
- Autenticación de usuarios con PocketBase
- Dashboard protegido con rutas seguras
- Sidebar responsive y layout de dashboard
- Pantalla de carga inicial (`SplashScreen`)
- Enrutamiento perezoso con React Router v7
- Gestión de datos personales en `dashboard/gestion-ingresos`
- Componentes reutilizables y estilo con Fluent UI

## Características

- **Login seguro** con validación de formulario
- **ProtectedRoute** para proteger rutas internas
- **Dashboard principal** con tarjetas de métricas, gráficos y actividad reciente
- **Gestión de datos personales** con tabla y modal de datos
- **Splash screen** para transiciones suaves
- **Rutas perezosas** para mejorar el rendimiento
- **Sidebar y layout** para la navegación dentro del dashboard
- **TypeScript y ESLint** para calidad de código

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
│       ├── gestion-ingresos/
│       │   ├── components/
│       │   │   ├── Modal/
│       │   │   │   ├── DatosPersonalesModal.styles.ts
│       │   │   │   ├── DatosPersonalesModal.tsx
│       │   │   │   └── ModalIcons.tsx
│       │   │   ├── Table/
│       │   │   │   ├── DatosPersonalesTable.styles.ts
│       │   │   │   └── DatosPersonalesTable.tsx
│       │   ├── pages/
│       │   │   └── DatosPersonales.tsx
│       │   └── styles/
│       │       └── Ingresos.styles.ts
│       └── overview/
│           ├── components/
│           │   ├── ChartContainer/
│           │   │   ├── ChartContainer.styles.ts
│           │   │   └── ChartContainer.tsx
│           │   ├── RecentActivity/
│           │   │   ├── RecentActivity.styles.ts
│           │   │   └── RecentActivity.tsx
│           │   └── StatCard/
│           │       ├── StatCard.styles.ts
│           │       ├── StatCard.tsx
│           │       └── StatCardIcons.tsx
│           └── pages/
│               └── Dashboard.tsx
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
- `/dashboard/datos-personales` — Gestión de datos personales

## Arquitectura

- **app/**: Enrutado principal y splash screen
- **components/Layouts/**: Layouts para auth y dashboard
- **features/**: Módulos de auth y dashboard
- **shared/**: Hooks, API y componentes reutilizables
- **assets/**: Archivos estáticos

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
