import { useState } from "react";
import { useNavigate } from "react-router";
import { useSplash } from "@/app/ SplashContext";
import { useFabStyles } from "./FabButton.styles";


interface FabAction {
    page: string;
    label: string;
    icon: string; 
}

const dashboardActions: FabAction[] = [
    { page: "/dashboard/comunas", label: "Comunas", icon: "C" },
    { page: "/dashboard/consejos-comunales", label: "Consejos Comunales", icon: "CC" },
    { page: "/dashboard/nivel-academico", label: "Nivel Académico", icon: "NA" },
    { page: "/dashboard/cargos", label: "Cargos", icon: "Ca" },
    { page: "/dashboard/bancos", label: "Bancos", icon: "B" },
    { page: "/dashboard/rutas", label: "Rutas", icon: "R" },
];

export const FabButton = () => {
    const styles = useFabStyles();
    const [isExpanded, setIsExpanded] = useState(false);
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
            {/* Botones de configuración (se muestran si está expandido) */}
            <div className={`${styles.buttonsWrapper} ${isExpanded ? styles.expandedState : ""}`}>
                {dashboardActions.map((action) => (
                    <div key={action.page} className={styles.configBtnWrapper}>
                        {/* Tooltip */}
                        <div className={`${styles.tooltip} ${isExpanded ? styles.tooltipVisible : ""}`}>
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
             {/* Botón Principal */}
             <button onClick={handleMainToggle} className={styles.mainBtn}>
                ⚙️
            </button>
        </div>
    );
};