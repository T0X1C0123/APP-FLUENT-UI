import { Input, Button, Link, Field, MessageBar, MessageBarBody } from "@fluentui/react-components";
import { useLoginStyles } from "../styles/Login.styles";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSplash } from "@/app/SplashContext";

export const LoginForm = () => {
    const styles = useLoginStyles();
    const navigate = useNavigate();
    const { showSplash } = useSplash();
    const { login, isLoading, error } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit:  React.SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const success = await login(email, password);

        if (success) {
            showSplash(); // Mostramos el splash de transición
            navigate("/dashboard"); // Navegamos al dashboard
        }
    };

    return (
        <form onSubmit={handleSubmit}className={styles.form}>
            <div className={styles.welcomeText}>
                <h1>SISTEMA DE TALENTO HUMANO</h1>
                <p>Dirección de Ciencia, Tecnología e Innovación</p>
            </div>

            {/* Mensaje de error de Fluent UI si algo sale mal */}
            {error && (
                <MessageBar intent="error" style={{ marginBottom: "10px" }}>
                    <MessageBarBody>{error}</MessageBarBody>
                </MessageBar>
            )}

             <Field required>
                <Input 
                    placeholder="Correo Electrónico" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading} 
                />
            </Field>
            <Field required>
                <Input 
                    placeholder="Contraseña" 
                    required 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </Field>

             <Button
                appearance="primary"
                size="large"
                type="submit"
                className={styles.customSignInBtn}
                disabled={isLoading}
            >
                {isLoading ? "VERIFICANDO..." : "INICIAR SESIÓN"}
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