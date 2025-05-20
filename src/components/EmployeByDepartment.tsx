import { useState } from "react";
import { obtenerEmployesByDepartment } from "../services/employeService";

export default function EmployeByDepartment(){
    const [departmentId, setDepartmentId] = useState('');
    const [employees, setEmployees] = useState<any[]>([]);

    const handledSearch = async () => {
        const data = await obtenerEmployesByDepartment(Number(departmentId));
        setEmployees(data);
    };

    return (
        <div>
            <h1>Consulta de Informaciòn de Empleados</h1>
            <h2><p>Consulta los detalles de empleados filtrando por Id de Departamento</p></h2>
            <h2>Buscar por Departamento</h2>
            <input type="number" 
                placeholder="ID Departamento"
                value={departmentId}
                onChange={(e) => setDepartmentId(e.target.value)}
            />
            <button onClick={handledSearch}>Consultar</button>


        </div>
    )
}