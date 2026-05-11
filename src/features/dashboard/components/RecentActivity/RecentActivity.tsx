import { useRecentActivityStyles } from "./RecentActivity.styles";

interface Activity {
    id: string | number;
    text: string;
}

interface RecentActivityProps {
    activities: Activity[];
}

export const RecentActivity = ({ activities }: RecentActivityProps) => {
    const styles = useRecentActivityStyles();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Actividad Reciente</h2>
            <ul className={styles.list}>
                {activities.length === 0 ? (
                    <li className={styles.listItem}>No hay actividad reciente</li>
                ): (
                    activities.map((activity) => (
                        <li className={styles.listItem} key={activity.id}>
                            {activity.text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};