import { Button } from "@fluentui/react-components";
import { useModalStyles } from "../DatosPersonalesModal.styles";
import { AddIcon } from "../ModalIcons";

export const EstudiosTab = () => {
    const styles = useModalStyles();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0 }}>Registros Académicos</h4>
                <Button appearance="primary" style={{ backgroundColor: '#e63946', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AddIcon /> Añadir Estudio
                </Button>
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nivel</th><th>Título</th><th>Estatus</th><th>Fecha</th><th>Institución</th><th>Periodo</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan={7} style={{ textAlign: 'center', padding: '2rem' }}>No hay estudios registrados</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};