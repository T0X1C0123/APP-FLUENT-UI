import { makeStyles } from "@fluentui/react-components";

export const useSidebarStyles = makeStyles({
    sidebar: {
        width: "250px",
        backgroundColor: "#1d3557",
        color: "#f1faee",
        display: "flex",
        flexDirection: "column",
        transition: "left 0.3s ease, transform 0.3s ease",
        position: "fixed",
        height: "100%",
        left: "0px", // Por defecto abierto en escritorio
        zIndex: 10,
        "@media (max-width: 768px)": {
            left: "-250px", // Oculto por defecto en móvil
        },
    },
    mobileActive: {
        left: "0px !important", // Forzado para móvil cuando se abre
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
        padding: "1.5rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
    },
    logo: {
        width: "40px",
        height: "40px",
        backgroundColor: "#e63946",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        color: "white",
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: 600,
    },
    footer: {
        padding: "1.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        marginTop: "auto",
    },
    logoutBtn: {
        background: "transparent",
        border: "none",
        color: "#f1faee",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0.75rem",
        fontSize: "1rem",
        borderRadius: "4px",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
    },
});