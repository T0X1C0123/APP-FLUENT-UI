import { Outlet } from "react-router";
import { makeStyles } from "@fluentui/react-components";
import { DashboardSidebar } from "@/features/dashboard/components/Sidebar/DashboardSidebar";
import { DashboardHeader } from "@/features/dashboard/components/Header/DashboardHeader";
import { useSidebarContext } from "@/features/dashboard/contexts/SidebarContext";
import { FabButton } from "@/features/dashboard/components/FabButton/FabButton";

const useStyles = makeStyles({
    container: {
        display: "flex",
        height: "100vh",
        position: "relative",
        zIndex: 1,
    },
    mainContent: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        // Se ajusta dependiendo del tamaño del sidebar (Contexto)
        marginLeft: "250px", 
        transition: "margin-left 0.3s ease",
    },
    contentArea: {
        flex: 1,
        padding: "2rem",
        overflowY: "auto",
    },
});

export const DashboardLayout = () => {
    const styles = useStyles();
    const { isMobileOpen } = useSidebarContext();

    return (
       <div className={styles.container}>
            {/* Sidebar extraído */}
            <DashboardSidebar />

            {/* Contenido principal */}
            <div className={styles.mainContent} style={{ marginLeft: isMobileOpen ? "0" : "250px" }}>
                {/* Header extraído */}
                <DashboardHeader />

                {/* Área de páginas hijas */}
                <div className={styles.contentArea}>
                    <Outlet />
                </div>
            </div>
             {/* FAB extraído */}
            <FabButton />
       </div>
    );
};