import { useState } from "react";
import axios from "axios";
import { getSystemErrorMessage } from "util";

export default function CreateDepartment(){
    const[departmentName, setDepartmentName] = useState('');
    const[managerId, setManagerId] = useState('');

    const handledCreate = async () => {
        try{
            const response = await axios.post('http://localhost:8080/api/department', {
                departmentName,
                managerId: Number(managerId),
            });
            setMessage('Departamento Creado');
        }catch(error: any){

        }
    }
}