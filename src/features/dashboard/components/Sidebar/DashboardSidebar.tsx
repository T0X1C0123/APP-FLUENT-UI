import { useAuth } from "@/shared/hooks/useAuth";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { useSidebarStyles } from "./DashboardSidebar.styles";
import { useSplash } from "@/app/SplashContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { menuConfig } from "@/features/dashboard/constants/menuConfig";
import { ChevronDownIcon, LogoutIcon } from "./SidebarIcons";

export const DashboardSidebar = () => {
    const styles = useSidebarStyles();
    const { isMobileOpen, closeMobile } = useSidebarContext();
    const { logout } = useAuth();
    const { showSplash } = useSplash();
    const navigate = useNavigate();

    const [openAccordion, setOpenAccordion] = useState<string | null>(null)
    
    // Efecto para abrir el acordeón de la ruta actual
    useEffect(() => {
        for (const item of menuConfig) {
            if (item.subItems?.some(sub => location.pathname === sub.path)) {
                setOpenAccordion(item.label);
                break;
            }
        }
    }, [location.pathname]);

    const handleNavigation = (path: string) => {
        showSplash();
        navigate(path);
        closeMobile(); // Cierra el menú si estás en móvil
    };

    const handleLogout = () => {
        showSplash();
        setTimeout(() => {
            logout();
            navigate("/");
        }, 300); 
    };

    const toggleAccordion = (label: string) => {
        setOpenAccordion(prev => (prev === label ? null : label));
    };

    return (
        <aside className={`${styles.sidebar} ${isMobileOpen ? styles.mobileActive : ""}`}>
             <div className={styles.header}>
                <div className={styles.logo}>TH</div>
                <div className={styles.title}>DCTI</div>
            </div>

            <nav className={styles.menu}>
                {menuConfig.map((item) => {
                    const isAccordion = item.subItems && item.subItems.length > 0;
                    const isAccordionOpen = openAccordion === item.label;
                    
                    const isActive = item.path 
                        ? location.pathname === item.path 
                        : item.subItems?.some(sub => location.pathname === sub.path);

                    if (!isAccordion) {
                        return (
                            <div
                                key={item.label}
                                className={`${styles.menuItem} ${isActive ? 'active' : ''}`}
                                onClick={() => item.path && handleNavigation(item.path)}
                            >
                                <span className={styles.menuItemIcon}>{item.icon}</span>
                                {item.label}
                            </div>
                        );
                    }

                    return (
                        <div key={item.label} className={styles.accordionItem}>
                            <div
                                className={`${styles.accordionHeader} ${isActive ? 'active' : ''}`}
                                onClick={() => toggleAccordion(item.label)}
                            >
                                <div className={styles.accordionTitle}>
                                    <span className={styles.accordionIcon}>{item.icon}</span>
                                    {item.label}
                                </div>
                                <span className={`${styles.accordionArrow} ${isAccordionOpen ? styles.arrowRotated : ''}`}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                            
                            <div className={`${styles.accordionContentWrapper} ${isAccordionOpen ? styles.accordionContentWrapperOpen : ''}`}>
                                <div className={styles.accordionInner}>
                                    <div style={{ padding: "0.5rem 0" }}>
                                        {item.subItems?.map((sub) => (
                                            <div
                                                key={sub.path}
                                                className={`${styles.submenuItem} ${location.pathname === sub.path ? 'active' : ''}`}
                                                onClick={() => handleNavigation(sub.path)}
                                            >
                                                {sub.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </nav>                                                                                                                                  

            <div className={styles.footer}>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                    <span className={styles.logoutIcon}>
                        <LogoutIcon />
                    </span>
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
};