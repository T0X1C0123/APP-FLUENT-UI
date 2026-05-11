import { makeStyles } from "@fluentui/react-components";

export const useDashboardStyles = makeStyles({
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px', 
        marginBottom: '32px',
    },
    dataGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '16px',
    },
});