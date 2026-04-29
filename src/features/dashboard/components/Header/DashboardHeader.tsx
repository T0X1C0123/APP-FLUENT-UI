import { useAuth } from "@/shared/hooks/useAuth";
import { useSidebarContext } from "@/features/dashboard/contexts/SidebarContext";
import { useHeaderStyles } from "./ DashboardHeader.styles";

export const DashboardHeader = () => {
    const styles = useHeaderStyles();
    const { user } = useAuth();
    const { toggleMobile } = useSidebarContext();

    const initials = user?.name
    ? user.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
    : 'AD';

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <button onClick={toggleMobile} className={styles.menuToggle}>☰</button>
                <h1 className={styles.title}>Dashboard</h1>
            </div>
            <div className={styles.rightSection}>
                <span className={styles.userName}>{user?.name || 'Usuario'}</span>
                <div className={styles.avatar}>{initials}</div>
            </div>
        </header>
    );
};
