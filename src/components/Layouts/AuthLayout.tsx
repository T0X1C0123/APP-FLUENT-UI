import { makeStyles } from "@fluentui/react-components";
import { Outlet } from "react-router";

const useStyles = makeStyles({
    root: {
        minHeight: "100vh", // Ocupa toda la pantalla
        width: "100%",
        backgroundColor: "white", 
        display: "flex",    // Centra lo que venga dentro (el Outlet)
        justifyContent: "center",
        alignItems: "center",
    },
});

export const AuthLayout = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Outlet />
        </div>
    );
};