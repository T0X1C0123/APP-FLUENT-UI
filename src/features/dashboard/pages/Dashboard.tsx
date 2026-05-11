import { useAuth } from "@/shared/hooks/useAuth";
import { StatCard } from "../components/StatCard/StatCard";
import { useDashboardStyles } from "../styles/Dashboard.styles";
import { ChartContainer } from "../components/ChartContainer/ChartContainer";
import { RecentActivity } from "../components/RecentActivity/RecentActivity";
import { CumpleanosIcon, EficienciaIcon, NuevosIngresosIcon, ProcesosIcon, SuplentesIcon, UsersIcon } from "../components/StatCard/StatCardIcons";

const Dashboard = () => {
    const { user } = useAuth();
    const styles = useDashboardStyles();

    const mockActivities = [
        { id: 1, text: "Juan Pérez se registró en el sistema" },
        { id: 2, text: "Se actualizó el contrato de María García" },
    ];

    const initials = user?.name 
        ? user.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() 
        : 'AD';

    return (
        <>
            <div style={{ display: 'none' }}>{initials}</div>

            <div className={styles.statsGrid}>
                <StatCard 
                    title="Total de Empleados" 
                    value={0} 
                    subtitle="Empleados registrados" 
                    iconBgColor="#e63946"   
                    borderColor="#e63946"     
                    icon={<UsersIcon />} 
                    status="positive"
                />
                 <StatCard 
                    title="Trabajadores Suplentes" 
                    value={0} 
                    subtitle="Personal suplente activo" 
                    iconBgColor="#2a9d8f" 
                    borderColor="#2a9d8f" 
                    icon={<SuplentesIcon />} 
                />
                <StatCard 
                    title="Cumpleaños este Mes" 
                    value={0} 
                    subtitle="Celebraciones pendientes" 
                    iconBgColor="#e9c46a" 
                    borderColor="#e9c46a" 
                    icon={<CumpleanosIcon />} 
                />
                <StatCard 
                    title="Nuevos Ingresos" 
                    value={0} 
                    subtitle="Últimos 30 días" 
                    iconBgColor="#264653" 
                    borderColor="#264653" 
                    icon={<NuevosIngresosIcon />} 
                    status="positive"
                />
                <StatCard 
                    title="Procesos Activos" 
                    value={0} 
                    subtitle="Datos incompletos" 
                    iconBgColor="#e9c46a" 
                    borderColor="#e76f51"    
                    icon={<ProcesosIcon />} 
                    status="negative"
                />
                <StatCard 
                    title="Eficiencia del Sistema" 
                    value="0%" 
                    subtitle="Datos completos" 
                    iconBgColor="#264653" 
                    borderColor="#264653" 
                    icon={<EficienciaIcon />} 
                    status="positive"
                />
            </div>
            
            <div className={styles.dataGrid}>
                <ChartContainer />
                <RecentActivity activities={mockActivities} />
            </div>
        </>
    );
};

export default Dashboard;