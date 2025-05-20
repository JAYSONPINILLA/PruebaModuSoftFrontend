import { useState } from 'react';
import { obtenerEmployesByDepartment } from '../services/employeService';

export default function EmployeeByDepartment() {
  const [departmentId, setDepartmentId] = useState('');
  const [employees, setEmployees] = useState<any[]>([]);

  const handleSearch = async () => {
    const data = await obtenerEmployesByDepartment(dept_no);
    setEmployees(data);
  };

  return (
    <div>
      <h2>Empleados por Departamento</h2>
      <input
        type="text"
        placeholder="ID Departamento"
        value={dept_no}
        onChange={(e) => setDepartmentId(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Cargo</th>
            <th>Salario</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.emp_no}>
              <td>{emp.emp_no}</td>
              <td>{emp.empName}</td>
              <td>{emp.nameCargo}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
