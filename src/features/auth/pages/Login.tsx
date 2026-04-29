import { LoginBranding } from "../components/LoginBranding";
import { LoginForm } from "../components/LoginForm";
import { useLoginStyles } from "../styles/Login.styles";

const Login = () => {
    const styles = useLoginStyles();
    
    return (
        <div className={styles.cardContainer}>
             <div className={styles.leftPanel}>
                <LoginForm />
            </div>

            <LoginBranding />
        </div>
    );
};

export default Login;