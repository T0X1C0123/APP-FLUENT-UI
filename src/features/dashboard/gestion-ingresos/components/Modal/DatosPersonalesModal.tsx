import { useState } from "react";
import { useModalStyles } from "./DatosPersonalesModal.styles";
import { StarIcon, CloseIcon } from "./ModalIcons";

// Importar todas las pestañas desacopladas
import { PersonalTab } from "./tabs/PersonalTab";
import { DireccionTab } from "./tabs/DireccionTab";
import { EstudiosTab } from "./tabs/EstudiosTab";
import { BancoTab } from "./tabs/BancoTab";
import { TransporteTab } from "./tabs/TransporteTab";

interface DatosPersonalesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DatosPersonalesModal = ({ isOpen, onClose }: DatosPersonalesModalProps) => {
    const styles = useModalStyles();
    const [activeTab, setActiveTab] = useState("personal");

    if (!isOpen) return null;

    const tabs = [
        { id: "personal", label: "Personal" },
        { id: "direccion", label: "Dirección" },
        { id: "estudios", label: "Estudios" },
        { id: "banco", label: "Banco" },
        { id: "transporte", label: "Transporte" },
    ];

    // Función para renderizar la pestaña activa de forma limpia
    const renderActiveTab = () => {
        switch (activeTab) {
            case "personal": return <PersonalTab />;
            case "direccion": return <DireccionTab />;
            case "estudios": return <EstudiosTab />;
            case "banco": return <BancoTab />;
            case "transporte": return <TransporteTab />;
            default: return null;
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.container} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.icon}><StarIcon /></div>
                    <h3 className={styles.title}>Datos del Trabajador</h3>
                    <button className={styles.closeBtn} onClick={onClose}><CloseIcon /></button>
                </div>

                <div className={styles.body}>
                    {/* Barra de progreso */}
                    <div style={{ height: '8px', backgroundColor: '#f1f3f5', borderRadius: '4px', marginBottom: '0.5rem' }}>
                        <div style={{ height: '100%', width: '0%', backgroundColor: '#2a9d8f', borderRadius: '4px' }}></div>
                    </div>
                    <div style={{ textAlign: 'right', marginBottom: '1rem', color: '#6c757d', fontSize: '0.9rem' }}>0/5 completado</div>
                    
                    {/* Navegación de Pestañas */}
                    <div className={styles.tabsHeader}>
                        {tabs.map(tab => (
                            <button 
                                key={tab.id}
                                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    
                    {/* Renderizado Condicional Desacoplado */}
                    {renderActiveTab()}
                </div>

                <div className={styles.footer}>
                    <button className={styles.saveBtn} style={{ backgroundColor: '#6c757d' }} onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};