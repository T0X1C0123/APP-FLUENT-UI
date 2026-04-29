import { useLoginStyles } from "../styles/Login.styles";

export const LoginBranding = () => {
    const styles = useLoginStyles();

    return (
        <div className={styles.rightPanel}>
             <div className={styles.infinityText}>
                <h2>DCTI</h2>
                <p>
                    Dirección de Ciencia, Tecnología e Innovación del estado. Sistema de
                    gestión de talento humano.
                </p>
            </div>
        </div>
    );
};