import React, { useState } from 'react';
import { Table, Container, Form, Button, Alert } from 'react-bootstrap';
import { getEmployeesByDepartment } from '../services/employeeService';

const EmpleadoConsulta = () => {
  const [departamentoId, setDepartamentoId] = useState('');
  const [empleados, setEmpleados] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!departamentoId) return;

    try {
      const response = await getEmployeesByDepartment(departamentoId);
      setEmpleados(response.data);
      setError(null);
    } catch (err) {
      setError('No se pudieron cargar los empleados.');
      setEmpleados([]);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">Consulta de Información de Empleados</h2>
      <p className="text-center text-muted">
        Consulta los detalles de los empleados filtrando por ID de departamento.
      </p>

      <Form className="d-flex align-items-center mb-3 justify-content-center" onSubmit={handleSubmit}>
        <Form.Label className="me-2 mb-0">ID del Departamento:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: 10"
          className="w-auto me-2"
          value={departamentoId}
          onChange={(e) => setDepartamentoId(e.target.value)}
        />
        <Button type="submit">Consultar</Button>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      {empleados.length > 0 && (
        <>
          <h5 className="text-primary">Resultados</h5>
          <Table table-hover responsive>
            <thead>
              <tr>
                <th>ID Empleado</th>
                <th>Nombre Completo</th>
                <th>Fecha Ingreso</th>
                <th>Cargo</th>
                <th>Salario</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((emp) => (
                <tr key={emp.empNo}>
                  <td>{emp.empNo}</td>
                  <td>{emp.nameEmployee}</td>
                  <td>{new Date(emp.fromDate).toLocaleDateString('es-CO')}</td>
                  <td>{emp.nameTitle}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.nameDepartment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      <p className="text-center text-muted mt-3">
        Prueba de Api - Jayson Pinilla
      </p>
    </Container>
  );
};

export default EmpleadoConsulta;