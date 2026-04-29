import { makeStyles, shorthands } from "@fluentui/react-components";

export const useFabStyles = makeStyles({
    container: {
        position: "fixed",
        bottom: "1rem",
        right: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        zIndex: 10000,
        flexDirection: "row-reverse", // El menú se expande hacia la izquierda
        "@media (max-width: 768px)": {
            flexDirection: "column-reverse", // Hacia arriba en móvil
        },
    },
    buttonsWrapper: {
        display: "flex",
        flexDirection: "row-reverse",
        gap: "0.75rem",
        opacity: 0,
        visibility: "hidden",
        transform: "translateX(20px)",
        transition: "all 0.3s ease",
        "@media (max-width: 768px)": {
            flexDirection: "column-reverse",
            transform: "translateY(20px)",
            "&.expanded": {
                transform: "translateY(0)",
            },
        },
    },
    expandedState: {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0)",
        "@media (max-width: 768px)": {
            transform: "translateY(0)",
        },
    },  
    mainBtn: {
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#4c0000",
        color: "white",
        border: "none",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
        "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#d62828",
        },
    },
    configBtnWrapper: {
        position: "relative",
    },
    configBtn: {
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "#1d3557",
        color: "#fcfdfd",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        "&:hover": {
            backgroundColor: "#2a9d8f",
            transform: "scale(1.1)",
        },
    },
    tooltip: {
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: "10px",
        backgroundColor: "#1d3557",
        color: "white",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
        pointerEvents: "none", // Para que no interfiera con el hover
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.2s ease, visibility 0.2s ease",
    },
    tooltipVisible: {
        opacity: 1,
        visibility: "visible",
    },
    tooltipArrow: {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        ...shorthands.borderColor("#1d3557", "transparent", "transparent", "transparent"),
        ...shorthands.borderWidth("6px"),
        ...shorthands.borderStyle("solid"),
    },
});