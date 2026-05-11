import { makeStyles } from "@fluentui/react-components";

export const useStatCardStyles = makeStyles({
    card: {
        background: '#ffffff',
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column' as const,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        selectors: {
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    borderAccent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '5px',
        height: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    title: {
        fontSize: '0.9rem', 
        color: '#6c757d',
    },
    iconWrapper: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
    },
    value: {
        fontSize: '2rem',
        fontWeight: 700, 
        marginBottom: '0.5rem',
        color: '#212529', 
    },
    subtitle: {
        fontSize: '0.85rem', 
        color: '#6c757d',
        display: 'flex',
        alignItems: 'center',
    },
    positive: {
        color: '#2a9d8f',
    },
    negative: {
        color: '#e63946',
    },
});