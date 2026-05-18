import { makeStyles } from "@fluentui/react-components";

export const useIngresosStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#1d3557',
        margin: 0,
    },
});