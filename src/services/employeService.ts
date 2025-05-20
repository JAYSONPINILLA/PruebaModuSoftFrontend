import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const obtenerEmployesByDepartment = async (dept_no : string) => {
    const response = await axios.get('${API_URL}/api/employee/dept/{id}');
    return response.data;
};

export const createDepartment = async (dept_no : string, dept_name : string) => {
    const response = await axios.get('${API_URL}/api/department/');
    return response.data;
}