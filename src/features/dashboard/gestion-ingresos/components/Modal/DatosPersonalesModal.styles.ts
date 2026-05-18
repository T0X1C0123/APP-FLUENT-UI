import { makeStyles } from "@fluentui/react-components";

export const useModalStyles = makeStyles({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '900px', 
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #f1f3f5',
    },
    icon: {
        width: '24px',
        height: '24px',
        color: '#e63946',
        marginRight: '0.75rem',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#1d3557',
        flex: 1,
        margin: 0,
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        marginLeft: 'auto',
        color: '#6c757d',
        selectors: {
            '&:hover': { color: '#e63946' }
        }
    },
    body: {
        padding: '1.5rem',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
        padding: '1rem 1.5rem',
        borderTop: '1px solid #f1f3f5',
    },
    // Tabs Styles
    tabsHeader: {
        display: 'flex',
        borderBottom: '2px solid #dee2e6',
        marginBottom: '1rem',
    },
    tabBtn: {
        padding: '0.5rem 1rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 500,
        color: '#6c757d',
        borderBottom: '2px solid transparent',
        marginBottom: '-2px',
        transition: 'all 0.2s',
    },
    tabActive: {
        color: '#e63946',
        borderBottom: '2px solid #e63946',
    },
    // Form Grid
    formGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    formLabel: {
        fontWeight: 500,
        marginBottom: '0.5rem',
        color: '#1d3557',
        fontSize: '0.9rem',
    },
    formActions: {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    saveBtn: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#e63946',
        color: 'white',
        transition: 'all 0.3s ease',
        selectors: {
            '&:hover': { backgroundColor: '#d62828' }
        },
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
        },
    },
});