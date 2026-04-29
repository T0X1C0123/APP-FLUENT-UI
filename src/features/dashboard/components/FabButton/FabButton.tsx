import { useState } from "react";
import { useNavigate } from "react-router";
import { useFabStyles } from "./FabButton.styles";
import { useSplash } from "@/app/SplashContext";
import { 
    ComunasIcon, 
    ConsejosComunalesIcon, 
    NivelAcademicoIcon,
    InstitutoAcademicoIcon,
    TipoPersonalIcon,
    TipoFuncionarioIcon,
    CargosPublicosIcon,
    CargosOnapreIcon,
    BancosIcon,
    RutasIcon,
    CarrerasAcademicasIcon,
    SettingsIcon
} from "./FabIcons";


interface FabAction {
    page: string;
    label: string;
    icon: React.ReactNode; 
}

const dashboardActions: FabAction[] = [
    { page: "/dashboard/comunas", label: "Comunas", icon: <ComunasIcon /> },
    { page: "/dashboard/consejos-comunales", label: "Consejos Comunales", icon: <ConsejosComunalesIcon /> },
    { page: "/dashboard/nivel-academico", label: "Nivel Académico", icon: <NivelAcademicoIcon /> },
    { page: "/dashboard/instituto-academico", label: "Instituto Académico", icon: <InstitutoAcademicoIcon /> },
    { page: "/dashboard/tipo-personal", label: "Tipo Personal", icon: <TipoPersonalIcon /> },
    { page: "/dashboard/tipo-funcionario", label: "Tipo Funcionario", icon: <TipoFuncionarioIcon /> },
    { page: "/dashboard/cargos-publicos", label: "Cargos Públicos", icon: <CargosPublicosIcon /> },
    { page: "/dashboard/cargos-onapre", label: "Cargos Onapre", icon: <CargosOnapreIcon /> },
    { page: "/dashboard/bancos", label: "Bancos", icon: <BancosIcon /> },
    { page: "/dashboard/rutas", label: "Rutas", icon: <RutasIcon /> },
    { page: "/dashboard/carrera-academica", label: "Carreras Académicas", icon: <CarrerasAcademicasIcon /> },
];

export const FabButton = () => {
    const styles = useFabStyles();
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
    const { showSplash } = useSplash();
    const navigate = useNavigate();

    // Maneja el clic en un botón de configuración
    const handleActionClick = (e: React.MouseEvent, action: FabAction) => {
        e.preventDefault();
        e.stopPropagation();  // Evita que el click llegue al contenedor y lo cierre
        showSplash();
        navigate(action.page);
        setIsExpanded(false);
    };

    // Maneja el clic en el botón principal (engranaje)
    const handleMainToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded((prev) => !prev);
    };

    // Cierra el menú si se hace clic fuera de él
    const handleContainerClick = () => {
        if (isExpanded) {
            setIsExpanded(false);
        }
    };

    return (
        <div className={styles.container} onClick={handleContainerClick}>
            {/* Botón Principal */}
             <button onClick={handleMainToggle} className={styles.mainBtn}>
                 <SettingsIcon />
            </button>

            {/* Botones de configuración (se muestran si está expandido) */}
            <div className={`${styles.buttonsWrapper} ${isExpanded ? styles.expandedState : ""}`}>
                {dashboardActions.map((action) => (
                    <div 
                        key={action.page} 
                        className={styles.configBtnWrapper}
                        onMouseEnter={() => setHoveredIndex(action.page)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Tooltip */}
                        <div className={`${styles.tooltip} ${hoveredIndex === action.page ? styles.tooltipVisible : ""}`}>
                            {action.label}
                            <div className={styles.tooltipArrow}></div>
                        </div>
                    
                        {/* Botón */}
                        <button 
                            onClick={(e) => handleActionClick(e, action)} 
                            className={styles.configBtn}
                            title={action.label}
                        >
                            {action.icon}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};