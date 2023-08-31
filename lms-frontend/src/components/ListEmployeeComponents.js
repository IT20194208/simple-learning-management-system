import React, { useEffect, useState } from 'react'
import StudentServices from '../services/StudentServices'
import { Link } from 'react-router-dom'

const ListEmployeeComponents = () => {

  const [student,setStudents] = useState([])
  
  useEffect(() =>{
        StudentServices.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
  },[])

  return (
    <div className='container'>

        <br/>
        <Link to ="/add-student" className="btn btn-primary mb-2">Add Student</Link>
        <h2 className='text-center'>List of Students</h2> <br/>
        <table className='table table-success table-striped' style={{marginTop:"10px"}}>
            <thead>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
                <th>Student Tel</th>
                <th>Student Nic</th>
            </thead>
            <tbody>
                {
                  student.map(
                    student=>
                    <tr key={student.sid}>
                        <td>{student.sid}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                        <td>{student.tel}</td>
                        <td>{student.nic}</td>
                    </tr>
                  )  
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents
