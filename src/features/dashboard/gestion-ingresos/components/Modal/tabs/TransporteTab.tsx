import { useState } from "react";
import { Input, Select, Option } from "@fluentui/react-components";
import { useModalStyles } from "../DatosPersonalesModal.styles";
import { CheckIcon } from "../ModalIcons";

export const TransporteTab = () => {
    const styles = useModalStyles();
    const [transportType, setTransportType] = useState("");

    return (
        <>
            <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                <label className={styles.formLabel}>Tipo de Transporte</label>
                <Select onChange={(_, data) => setTransportType(data.value || "")} value={transportType}>
                    <option value="">Seleccione tipo</option>
                    <option value="publico">Transporte Público</option>
                    <option value="privado">Transporte Privado</option>
                </Select>
            </div>

            {/* Campos Condicionales Público */}
            <div className={styles.formGrid} style={{ display: transportType === "publico" ? "grid" : "none" }}>
                <div className={styles.formGroup}><label className={styles.formLabel}>Tipo de Transporte (Público)</label><Select><option value="">Seleccione</option></Select></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Ruta</label><Select><Option value="">Seleccione</Option></Select></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Dificultad</label><Select><option value="">Seleccione</option></Select></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Tiempo de Traslado</label><Input appearance="outline" placeholder="Ej: 30 min" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Frecuencia</label><Input appearance="outline" placeholder="Ej: Diario" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Costo Diario</label><Input appearance="outline" type="number" placeholder="0.00" /></div>
                <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}><label className={styles.formLabel}>Observaciones</label><Input appearance="outline" placeholder="Observaciones" /></div>
            </div>

            {/* Campos Condicionales Privado */}
            <div className={styles.formGrid} style={{ display: transportType === "privado" ? "grid" : "none" }}>
                <div className={styles.formGroup}><label className={styles.formLabel}>Tipo de Vehículo</label><Select><option value="">Seleccione</option></Select></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Marca</label><Input appearance="outline" placeholder="Marca" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Modelo</label><Input appearance="outline" placeholder="Modelo" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Color</label><Input appearance="outline" placeholder="Color" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Capacidad Tanque (L)</label><Input appearance="outline" type="number" placeholder="Litros" /></div>
                <div className={styles.formGroup}><label className={styles.formLabel}>Placa</label><Input appearance="outline" placeholder="Placa" /></div>
                <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}><label className={styles.formLabel}>Observaciones</label><Input appearance="outline" placeholder="Observaciones" /></div>
            </div>

            <div className={styles.formActions}>
                <button className={styles.saveBtn}><CheckIcon /></button>
            </div>
        </>
    );
};