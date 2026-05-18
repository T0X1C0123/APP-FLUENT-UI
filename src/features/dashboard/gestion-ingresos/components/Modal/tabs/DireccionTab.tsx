import { Input, Select } from "@fluentui/react-components";
import { useModalStyles } from "../DatosPersonalesModal.styles";
import { CheckIcon } from "../ModalIcons";

export const DireccionTab = () => {
    const styles = useModalStyles();

    return (
        <div className={styles.formGrid}>
            <div className={styles.formGroup}><label className={styles.formLabel}>Estado</label><Select><option value="">Seleccione Estado</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Municipio</label><Select><option value="">Seleccione Municipio</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Parroquia</label><Select><option value="">Seleccione Parroquia</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Comuna</label><Select><option value="">Seleccione Comuna (opcional)</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Consejo Comunal</label><Select><option value="">Seleccione Consejo Comunal (opcional)</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Sector | Urbanismo</label><Input appearance="outline" placeholder="Ingrese el sector o urbanismo" /></div>
            <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}><label className={styles.formLabel}>Dirección Exacta</label><Input appearance="outline" placeholder="Ingrese la dirección exacta" /></div>
            <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}><label className={styles.formLabel}>Punto de Referencia</label><Input appearance="outline" placeholder="Ingrese un punto de referencia" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Cédula Jefe de Calle</label><Input appearance="outline" placeholder="Cédula del jefe de calle" type="number" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Nombre Jefe de Calle</label><Input appearance="outline" placeholder="Nombre del jefe de calle" /></div>
            
            <div className={styles.formActions} style={{ gridColumn: 'span 3' }}>
                <button className={styles.saveBtn}><CheckIcon /></button>
            </div>
        </div>
    );
};