import { Input, Select } from "@fluentui/react-components";
import { useModalStyles } from "../DatosPersonalesModal.styles";
import { CheckIcon } from "../ModalIcons";

export const BancoTab = () => {
    const styles = useModalStyles();

    return (
        <div className={styles.formGrid}>
            <div className={styles.formGroup}><label className={styles.formLabel}>Número de Cuenta</label><Input appearance="outline" type="number" placeholder="Ingrese el número de cuenta" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Banco</label><Select><option value="">Seleccione un banco</option></Select></div>
            <div className={styles.formActions} style={{ gridColumn: 'span 3' }}>
                <button className={styles.saveBtn}><CheckIcon /></button>
            </div>
        </div>
    );
};