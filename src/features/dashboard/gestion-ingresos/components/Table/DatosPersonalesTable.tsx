import { Button, Input } from "@fluentui/react-components";
import { useDatosPersonalesTableStyles } from "./DatosPersonalesTable.styles";

interface TableRow {
    id: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    telefono: string;
}

interface DatosPersonalesTableProps {
    data: TableRow[];
    onAdd: () => void;
    onEdit: (id: string) => void;
}

export const DatosPersonalesTable = ({ data, onAdd, onEdit }: DatosPersonalesTableProps) => {
    const styles = useDatosPersonalesTableStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Datos Personales</h2>
                <div className={styles.controls}>
                    <div style={{ position: 'relative', width: '250px' }}>
                        <Input 
                            appearance="outline" 
                            placeholder="Buscar por cédula, nombres..." 
                            style={{ width: '100%', paddingRight: '2.5rem', borderRadius: '20px' }}
                        />
                        <svg style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', pointerEvents: 'none' }} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"/>
                        </svg>
                    </div>
                    <Button appearance="primary" style={{ backgroundColor: '#e63946', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={onAdd}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                        Añadir
                    </Button>
                </div>                                                                                  
            </div>

            <div className={styles.tableWrapper}> 
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                     <tbody>
                        {data.length === 0 ? (
                            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>No hay registros</td></tr>
                        ) : (
                            data.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.cedula}</td>
                                    <td>{row.nombres}</td>
                                    <td>{row.apellidos}</td>
                                    <td>{row.telefono}</td>
                                    <td>
                                        <div className={styles.actionsCell}>
                                            <button className={`${styles.actionBtn} ${styles.editBtn}`} onClick={() => onEdit(row.id)}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                            </button>
                                            <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className={styles.paginationContainer}>
                <div className={styles.paginationInfo}>Mostrando 0 de 0 registros</div>
                <div className={styles.paginationControls}>
                    <button className={styles.paginationBtn} disabled>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                    </button>
                    <button className={styles.paginationBtn}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};