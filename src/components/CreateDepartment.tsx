import { useState } from 'react';
import axios from 'axios';

export default function CreateDepartment() {
  const [dept_name, SetDept_name] = useState('');
  const [dept_no, SetDept_no] = useState('');
  const [message, setMessage] = useState('');

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/department', {
        dept_name,
        dept_no,
      });

      setMessage(`Departamento creado con ID: ${response.data.departmentId}`);
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        setMessage('Error: ');
      } else {
        setMessage('Error inesperado al crear el departamento.');
      }
    }
  };

  return (
    <div>
      <h2>Crear Departamento</h2>
      <input
        type="text"
        placeholder="Nombre del Departamento"
        value={dept_name}
        onChange={(e) => SetDept_name(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="ID de la Ubicación (dept_no)"
        value={dept_no}
        onChange={(e) => SetDept_no(e.target.value)}
      /><br />
      <button onClick={handleCreate}>Crear</button>
      {message && <p>{message}</p>}
    </div>
  );
}
