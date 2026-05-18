import { makeStyles } from "@fluentui/react-components";

export const useChartContainerStyles = makeStyles({
    container: {
        background: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#1d3557',
        marginBottom: '1rem',
        marginTop: 0,
    },
    canvasWrapper: {
        width: '100%',
        height: '300px',
        position: 'relative',
    },
});