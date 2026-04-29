import { useAuth } from "@/shared/hooks/useAuth";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { useSidebarStyles } from "./DashboardSidebar.styles";
import { useSplash } from "@/app/SplashContext";
import { useNavigate } from "react-router";

export const DashboardSidebar = () => {
    const styles = useSidebarStyles();
    const { isMobileOpen, closeMobile } = useSidebarContext();
    const { logout } = useAuth();
    const { showSplash } = useSplash();
    const navigate = useNavigate();

    const handleNavigation = (page: string) => {
        showSplash();
        navigate(page);
        closeMobile(); // Cierra el menú si estás en móvil
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <aside className={`${styles.sidebar} ${isMobileOpen ? styles.mobileActive : ""}`}>
             <div className={styles.header}>
                <div className={styles.logo}>TH</div>
                <div className={styles.title}>DCTI</div>
            </div>

            <nav style={{ flex: 1, padding: "1.5rem 0", overflowY: "auto" }}>
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleNavigation("/dashboard"); }} 
                    style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        padding: "0.75rem 1.5rem", 
                        color: "#f1faee", 
                        textDecoration: "none" 
                    }}
                >
                    Dashboard
                </a>
                {/* Aquí irán los acordeones luego */}
            </nav>

            <div className={styles.footer}>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
};