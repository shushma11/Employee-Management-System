import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
export default function EmployeeComponent(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:8080/api/employees/${id}`)
            .then(response=> {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
            .catch(error => console.log(error));
        }
    },[id]);
    const saveEmployee=(event)=>{
        event.preventDefault();
        if(firstName.trim()==='' || lastName.trim()==='' || email.trim()===''){
            alert("Please Fill All the fields");
            return;
        }
        const employee={firstName,lastName,email};
        if(id){
            axios.put(`http://localhost:8080/api/employees/${id}`,employee)
            .then(response=> {
                console.log("Updated Employee:",response.data);
                navigate("/employees");
            })
            .catch(error => console.log(error));
        }
        else{
            axios.post("http://localhost:8080/api/employees",employee)
                .then(response => {
                    console.log(response.data);
                    navigate("/employees");
                }) 
                .catch(error=> console.log(error));
            }
    }
        
        function pageTitle(){
            if(id){
                return  <h2 className="text-center">Update Employee</h2>;
            }
            else{
                return <h2 className="text-center">Add Employee</h2>;
            }
        }
    return(
        <div className="container">
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 oddset-md-3">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="Enter Employee First Name" 
                                    value={firstName} 
                                    className="form-control" 
                                    onChange={(event)=> setFirstName(event.target.value)}/>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Enter Employee last Name" 
                                    value={lastName} 
                                    className="form-control" 
                                    onChange={(event)=> setLastName(event.target.value)}/>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Enter Employee Email Id" 
                                    value={email} 
                                    className="form-control" 
                                    onChange={(event)=> setEmail(event.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveEmployee} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}