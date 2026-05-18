import { useState } from "react";
import { DatosPersonalesTable } from "../components/Table/DatosPersonalesTable";
import { DatosPersonalesModal } from "../components/Modal/DatosPersonalesModal";
import { useIngresosStyles } from "../styles/Ingresos.styles";

const DatosIngreso = () => {
    const styles = useIngresosStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const mockData = [
        { id: '1', cedula: '12345678', nombres: 'Juan', apellidos: 'Pérez', telefono: '04121234567' },
        { id: '2', cedula: '87654321', nombres: 'María', apellidos: 'García', telefono: '04149876543' },
    ];
    
    return (
        <div className={styles.root}>
            <DatosPersonalesTable
                data={mockData} 
                onAdd={() => setIsModalOpen(true)} 
                onEdit={(id) => console.log("Editar registro:", id)} 
            />
            
            <DatosPersonalesModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default DatosIngreso;