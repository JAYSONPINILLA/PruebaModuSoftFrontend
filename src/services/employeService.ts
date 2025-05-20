import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const obtenerEmployesByDepartment = async (departmentId : number) => {
    const response = await axios.get('${API_URL}/api/employee/dept/{id}');
    return response;
}

export const obtenerEmployesByRoleAndManager = async (role: string, managerId: number) =>{
    const response = await axios.get('${API_URL}/api/employee/titleboss/{title}/{idboss}', {
        params: {role, managerId}
    });
    return response.data;
}