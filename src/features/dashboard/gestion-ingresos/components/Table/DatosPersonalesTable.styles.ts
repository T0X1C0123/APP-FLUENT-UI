import { makeStyles } from "@fluentui/react-components";

export const useDatosPersonalesTableStyles = makeStyles({
    container: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflowX: 'auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap' as const,
        gap: '1rem',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#1d3557',
        margin: 0,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    tableWrapper: {
        width: '100%',
        overflowX: 'auto' as const,
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse' as const,
        '& th': {
            textAlign: 'left',
            padding: '0.75rem',
            borderBottom: '2px solid #f1f3f5',
            color: '#6c757d',
            fontWeight: 500,
        },
        '& td': {
            padding: '0.75rem',
            borderBottom: '1px solid #f1f3f5',
        },
        '& tr:last-child td': {
            borderBottom: 'none',
        }
    },
    actionsCell: {
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
    },
    actionBtn: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        selectors: {
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }
        }
    },
    editBtn: {
        backgroundColor: '#2a9d8f',
        color: 'white',
    },
    deleteBtn: {
        backgroundColor: '#e63946',
        color: 'white',
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #f1f3f5',
    },
    paginationInfo: {
        color: '#6c757d',
        fontSize: '0.9rem',
    },
    paginationControls: {
        display: 'flex',
        gap: '0.5rem',
    },
    paginationBtn: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: '#f8f9fa',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        selectors: {
            '&:hover': { backgroundColor: '#e9ecef' },
            '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
            '&:disabled:hover': { backgroundColor: '#f8f9fa' },
        },
    },
});