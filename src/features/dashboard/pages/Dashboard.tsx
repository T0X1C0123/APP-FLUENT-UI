import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    dashboardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "1.5rem",
        alignItems: "start",
        "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
        },
    },
    card: {
        backgroundColor: "white",
        borderRadius: "18px",
        padding: "1.75rem",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
        minHeight: "12rem",
    },
    cardTitle: {
        margin: 0,
        marginBottom: "1rem",
        fontSize: "1.15rem",
        fontWeight: 600,
        color: "#1d3557",
    },
});

const Dashboard = () => {
    const styles = useStyles();

    return (
        <div className={styles.dashboardGrid}>
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>Resumen</h2>
                <p>Aquí va un vistazo rápido a tus métricas principales.</p>
            </section>
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>Actividad reciente</h2>
                <p>Registros recientes y actualizaciones del sistema.</p>
            </section>                              
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>Atajos</h2>
                <p>Accede rápidamente a las secciones más importantes.</p>
            </section>
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>Notificaciones</h2>
                <p>Mensajes y alertas importantes para tu equipo.</p>
            </section>
        </div>
    );
};

export default Dashboard;