import { Input, Select, Button } from "@fluentui/react-components";
import { useModalStyles } from "../DatosPersonalesModal.styles";
import { CheckIcon, UserPlaceholderIcon } from "../ModalIcons";

export const PersonalTab = () => {
    const styles = useModalStyles();

    return (
        <div className={styles.formGrid}>
            {/* Foto de Perfil */}
            <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}>
                <label className={styles.formLabel}>Foto de Perfil</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#f1f3f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <UserPlaceholderIcon />
                    </div>
                    <div>
                        <Button appearance="primary" size="small" style={{ marginBottom: '0.5rem', backgroundColor: '#e63946' }}>Seleccionar foto</Button>
                        <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>JPG, PNG o GIF (máx. 2MB)</div>
                    </div>
                </div>
            </div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Nacionalidad</label><Select value=""><option value="">Seleccione</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Cédula</label><Input appearance="outline" placeholder="Cédula" type="number" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Nombres</label><Input appearance="outline" placeholder="Nombres" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Apellidos</label><Input appearance="outline" placeholder="Apellidos" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Fecha de Nacimiento</label><Input appearance="outline" type="date" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Tipo RIF</label><Select><option value="">Seleccione</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>RIF</label><Input appearance="outline" placeholder="RIF" type="number" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Género</label><Select><option value="">Seleccione</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Origen Étnico</label><Select><option value="">Seleccione</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Etnia</label><Select><option value="">Seleccione</option></Select></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Teléfono</label><Input appearance="outline" placeholder="Teléfono" type="tel" /></div>
            <div className={styles.formGroup}><label className={styles.formLabel}>Email</label><Input appearance="outline" placeholder="Email" type="email" /></div>
            
            <div className={styles.formActions} style={{ gridColumn: 'span 3' }}>
                <button className={styles.saveBtn}><CheckIcon /></button>
            </div>
        </div>
    );
};