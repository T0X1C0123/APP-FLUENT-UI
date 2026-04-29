# APP-FLUENT-UI

Una aplicación React moderna construida con Vite, TypeScript y componentes Fluent UI. Este proyecto proporciona una base para aplicaciones web con características de autenticación, funcionalidad de dashboard y una interfaz de usuario responsiva.

## Características

- **Sistema de Autenticación**: Página de inicio de sesión con validación de formulario y marca
- **Pantalla de Bienvenida**: Pantalla de carga animada durante la inicialización de la aplicación
- **Diseño Responsivo**: Construido con Fluent UI para una experiencia consistente en múltiples plataformas
- **Enrutamiento**: Enrutamiento del lado del cliente con React Router v7
- **TypeScript**: Seguridad de tipos completa en toda la aplicación
- **ESLint**: Configurado para calidad de código y consistencia
- **Vite**: Servidor de desarrollo rápido y builds optimizados

## Tecnologías Utilizadas

### Dependencias Principales
- **React 19**: Librería UI para construir interfaces de usuario
- **React Router 7**: Enrutamiento declarativo para React
- **Fluent UI React Components**: Componentes del sistema de diseño de Microsoft
- **TypeScript**: JavaScript tipado para mejor experiencia de desarrollo

### Herramientas de Desarrollo
- **Vite**: Herramienta de build y servidor de desarrollo
- **ESLint**: Linting y formateo de código
- **Compilador TypeScript**: Verificación de tipos y compilación

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <repository-url>
   cd app-fluent-ui
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

### Desarrollo
Inicia el servidor de desarrollo con recarga en caliente:
```bash
npm run dev
```

### Build
Construye la aplicación para producción:
```bash
npm run build
```

### Vista Previa
Vista previa del build de producción localmente:
```bash
npm run preview
```

### Linting
Ejecuta ESLint para verificar la calidad del código:
```bash
npm run lint
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── AppRouter.tsx          # Componente principal del router con pantalla de bienvenida
│   ├── Router.tsx             # Definiciones de rutas
│   └── SplashContext.tsx      # Contexto para el estado de la pantalla de bienvenida
├── components/
│   └── Layouts/
│       └── AuthLayout.tsx     # Layout para páginas de autenticación
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginBranding.tsx  # Componente de marca para login
│   │   │   └── LoginForm.tsx      # Componente de formulario de login
│   │   ├── pages/
│   │   │   └── Login.tsx          # Página de login
│   │   └── styles/
│   │       └── Login.styles.ts    # Estilos para componentes de auth
│   └── dashboard/
│       ├── components/            # Componentes del dashboard (por implementar)
│       └── pages/                 # Páginas del dashboard (por implementar)
├── shared/
│   ├── components/
│   │   └── SplashScreen.tsx       # Componente de pantalla de bienvenida
│   └── styles/
│       └── Splash.styles.ts       # Estilos de pantalla de bienvenida
├── assets/                        # Activos estáticos
├── App.tsx                        # Componente raíz de la aplicación
└── main.tsx                       # Punto de entrada de la aplicación
```

## Arquitectura

La aplicación sigue una arquitectura basada en características:

- **Características**: Organizadas por dominio (auth, dashboard)
- **Compartido**: Componentes y utilidades comunes
- **Componentes**: Componentes UI reutilizables
- **Estilos**: Estilos específicos de componentes usando CSS-in-JS

## Contribución

1. Haz un fork del repositorio
2. Crea una rama de característica: `git checkout -b feature/tu-caracteristica`
3. Haz tus cambios y ejecuta pruebas
4. Confirma tus cambios: `git commit -am 'Agrega alguna característica'`
5. Sube a la rama: `git push origin feature/tu-caracteristica`
6. Envía una pull request

## Licencia

Este proyecto es privado y no está licenciado para uso público.
```
