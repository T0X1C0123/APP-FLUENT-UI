import { 
    DashboardIcon, 
    IngresosIcon, 
    HorariosIcon, 
    TrabajadorIcon, 
    EgresosIcon, 
    OrganismoIcon 
} from "../components/Sidebar/SidebarIcons";

export type SubMenuItem = { 
    label: string; 
    path: string; 
};

export type MenuItem = {
    label: string;
    icon: React.ReactNode;
    path?: string; // Si tiene path, es un enlace directo. Si no, es un acordeón
    subItems?: SubMenuItem[];
};

// --- DATOS DEL MENÚ ---
export const menuConfig: MenuItem[] = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
    },
    {
        label: "Gestión Ingresos",
        icon: <IngresosIcon />,
        subItems: [
            { label: "Datos Personales", path: "/dashboard/datos-personales" },
            { label: "Datos Ingresos", path: "/dashboard/datos-ingresos" },
            { label: "Gestión Carnet", path: "/dashboard/carnet-gestion" },
            { label: "Resumen Ingresos", path: "/dashboard/resumen-ingresos" },
            { label: "Bono Transporte", path: "/dashboard/reporte-bonotransporte" },
            { label: "Suplentes & Pasantes", path: "/dashboard/reporte-suplentes" },
        ],
    },
    {
        label: "Gestión Horarios",
        icon: <HorariosIcon />,
        subItems: [
            { label: "Horario Laboral", path: "/dashboard/horario-laboral" },
            { label: "Asistencia Laboral", path: "/dashboard/asistencia-laboral" },
            { label: "Control Asistencia", path: "/dashboard/control-asistencia" },
        ],
    },
    {
        label: "Gestión Trabajador",
        icon: <TrabajadorIcon />,
        subItems: [
            { label: "Constancia Trabajo", path: "/dashboard/constancia-trabajo" },
        ],
    },
    {
        label: "Gestión Egresos",
        icon: <EgresosIcon />,
        subItems: [
            { label: "Datos Egresos", path: "/dashboard/datos-egresos" },
        ],
    },
    {
        label: "Gestión Organismo",
        icon: <OrganismoIcon />,
        subItems: [
            { label: "Dato Fiscal", path: "/dashboard/dato-fiscal" },
            { label: "Estructura Organizativa", path: "/dashboard/estructura-organizativa" },
            { label: "Cargos", path: "/dashboard/cargos" },
        ],
    },
];