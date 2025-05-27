import React, { useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { crearDepartamento } from '../services/departmentService';

const CrearDepartamento = () => {
  const [formData, setFormData] = useState({
    dept_no: '',
    dept_name: '',
    emp_no: ''
  });

  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    try {
      await crearDepartamento({
        ...formData,
        emp_no: parseInt(formData.emp_no, 10)
      });
      setMensaje('Departamento creado exitosamente.');
      setFormData({ dept_no: '', dept_name: '', emp_no: '' });
    } catch (err) {
      setError('Error al crear el departamento.');
    }
  };

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ width: '32rem' }}>
        <h3 className="text-center">Crear Nuevo Departamento</h3>
        <p className="text-center text-muted">
          Completa los campos para registrar un nuevo departamento en el sistema.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Departamento:</Form.Label>
            <Form.Control
              type="text"
              name="dept_name"
              placeholder="Ej: Ventas, IT, Marketing"
              value={formData.dept_name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ID del Departamento:</Form.Label>
            <Form.Control
              type="text"
              name="dept_no"
              placeholder="Ej: D10, D20"
              value={formData.dept_no}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ID del Jefe del Departamento (Empleado):</Form.Label>
            <Form.Control
              type="number"
              name="emp_no"
              placeholder="Ej: 100, 101, 200"
              value={formData.emp_no}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Crear Departamento
          </Button>

          {mensaje && <Alert variant="success" className="mt-3">{mensaje}</Alert>}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Form>
      </Card>
    </Container>
  );
};

export default CrearDepartamento;