import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const crearDepartamento = (DeptManager) => axios.post(`${API_URL}/api/department/withManager`, DeptManager);
