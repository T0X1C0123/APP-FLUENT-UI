import { makeStyles } from "@fluentui/react-components";

export const useRecentActivityStyles = makeStyles({
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
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    listItem: {
        padding: '12px',
        backgroundColor: '#f9fafb', 
        borderRadius: '8px',
        fontSize: '14px',
        color: '#374151',
    },
});