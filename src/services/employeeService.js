import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const getEmployeesByDepartment = (id) => axios.get(`${API_URL}/api/employee/dept/${id}`);
