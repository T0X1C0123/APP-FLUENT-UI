import { useSplash } from "@/app/SplashContext";
import { useSplashStyles } from "../SplashScreen/Splash.styles";

export const SplashScreen = () => {
    const styles = useSplashStyles();
    const { isSplashVisible } = useSplash();

    const animationKey = isSplashVisible ? "visible" : "hidden";
    
    return (
        <div
            key={animationKey}
            className={`${styles.screen} ${!isSplashVisible ? styles.hidden : ""}`}
        >
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoOuter}>
                        <div className={styles.logoInner}>DCTI</div>
                    </div>
                </div>
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Talento Humano
                </h1>
                <p className={styles.subtitle}>Sistema de Gestión DCTI</p>
                <div className={styles.progress}>
                    <div className={styles.progressBar}></div>
                </div>
            </div>
        </div>
    );
};