import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function ListEmployeeComp(){
    const [employees,setEmployees]=useState([]);
    useEffect(() => {
        getAllEmployees();
    }, []);
    const navigator=useNavigate();
    const addEmployee=()=>{
        navigator('/add-employee');
    }
    function getAllEmployees(){
        axios.get("http://localhost:8080/api/employees/all")
        .then((response) => setEmployees(response.data)) 
        .catch((error) => console.log("Error occurred: ", error));
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }
    function deleteEmployee(id){
        axios.delete(`http://localhost:8080/api/employees/${id}`)
        .then((response)=>{
            getAllEmployees();
            navigator('/employees');
        })
        .catch((error) => console.log("Error occurred: ", error));
    }
    return(
        <div className="container">
            <h1 className="text-center">List of Employees</h1>
            <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee,index)=>(
                            <tr key={employee.id}>
                                {/* <td>{employee.id}</td> */}
                                <td>{index+1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>updateEmployee(employee.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}