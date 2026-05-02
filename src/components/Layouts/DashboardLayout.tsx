import { Outlet } from "react-router";
import { makeStyles } from "@fluentui/react-components";
import { DashboardSidebar } from "@/features/dashboard/components/Sidebar/DashboardSidebar";
import { DashboardHeader } from "@/features/dashboard/components/Header/DashboardHeader";
import { FabButton } from "@/features/dashboard/components/FabButton/FabButton";

const useStyles = makeStyles({
    container: {
        display: "grid",
        height: "100vh",
        width: "100%",
        gridTemplateColumns: "250px minmax(0, 1fr)",
        gridTemplateRows: "1fr",
        "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
        }
    },
    mainContent: {
        display: "grid",
        gridTemplateRows: "auto 1fr",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
    },
    contentArea: {
        minHeight: 0,
        padding: "2rem",
        overflowY: "auto",
    },
});

export const DashboardLayout = () => {
    const styles = useStyles();

    return (
       <div className={styles.container}>
            <DashboardSidebar />

            <div className={styles.mainContent}>
                <DashboardHeader />

                <div className={styles.contentArea}>
                    <Outlet />
                </div>
            </div>

            <FabButton />
       </div>
    );
};