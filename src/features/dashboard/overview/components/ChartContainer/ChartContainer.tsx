import { useChartContainerStyles } from "./ChartContainer.styles";

export const ChartContainer = () => {
    const styles = useChartContainerStyles();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Resumen de Ingresos</h2>
            <div className={styles.canvasWrapper}>
                 <canvas id="ingresosChart"></canvas>
            </div>
        </div>
    );
};