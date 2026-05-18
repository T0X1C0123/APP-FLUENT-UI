import type { ReactNode } from "react";
import { useStatCardStyles } from "./StatCard.styles";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    iconBgColor: string;
    borderColor: string;
    icon: ReactNode;
    status?: 'positive' | 'negative' | 'default';
}

export const StatCard = ({ title, value, subtitle, iconBgColor, borderColor, icon, status = 'default' }: StatCardProps) => {
    const styles = useStatCardStyles();

    return (
        <div className={styles.card}>
            <div className={styles.borderAccent} style={{ backgroundColor: borderColor }} />
            
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                <div className={styles.iconWrapper} style={{ backgroundColor: iconBgColor }}>
                    {icon}
                </div>
            </div>
            <div className={styles.value}>{value}</div>
            <div className={`${styles.subtitle} ${status === 'positive' ? styles.positive : ''} ${status === 'negative' ? styles.negative : ''}`}>
                {subtitle}
            </div>
        </div>
    );
};