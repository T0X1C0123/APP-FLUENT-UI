import { Input, Button, Link, Field } from "@fluentui/react-components";
import { useLoginStyles } from "../styles/Login.styles";

export const LoginForm = () => {
    const styles = useLoginStyles();

    return (
        <form className={styles.form}>
            <div className={styles.welcomeText}>
                <h1>SISTEMA DE TALENTO HUMANO</h1>
                <p>Dirección de Ciencia, Tecnología e Innovación</p>
            </div>

             <Field required>
                <Input 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    size="large" 
                />
            </Field>
            <Field required>
                <Input 
                    type="password" 
                    placeholder="Contraseña" 
                    size="large" 
                />
            </Field>

             <Button
                appearance="primary"
                size="large"
                type="submit"
                className={styles.customSignInBtn}
            >
                INICIAR SESIÓN
            </Button>

            <div className={styles.footerLink}>
                <span style={{ display: "inline-block" }}>¿Problemas para acceder?</span>
                <Link href="#" style={{ color: "#e63946", fontWeight: 600 }}>
                Contacte al administrador
                </Link>
            </div>
        </form>
    );
};