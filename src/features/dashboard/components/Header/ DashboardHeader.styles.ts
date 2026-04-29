import { makeStyles } from "@fluentui/react-components";

export const useHeaderStyles = makeStyles({
    header: {
        width: "100%",
        backgroundColor: "white",
        padding: "1rem 2rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 5,
    },
    leftSection: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    menuToggle: {
        display: "none", // Oculto en escritorio
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        "@media (max-width: 768px)": {
            display: "block", // Visible en móvil
        },
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: 600,
        color: "#1d3557",
        margin: 0,
    },
    rightSection: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    userName: {
        fontWeight: 500,
        "@media (max-width: 768px)": {
            display: "none", // Ocultar nombre en móvil
        },
    },
    avatar: {
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#e63946",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: "0.8rem",
    },
});