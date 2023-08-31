import React, {useState} from 'react'
import '../css/Addstudent.css';
import StudentServices from '../services/StudentServices';
import { useHistory } from 'react-router-dom';
const AddStudentComponent = () => {

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [tel,setTel]=useState('')
  const [nic,setNic]=useState('')  
  const history = useHistory();

  const saveStudent = (e) => {
    e.preventDefault();
    const student = {name,address,tel,nic}
    StudentServices.createStudent(student).then((response) =>{

        console.log(response.data)
        alert("student adding successfully!!!");
        history.push('/students');

    }).catch(error => {
        console.log(error)
    })
    // console.log(student);
  }

  return (
   <>
   <div className='containerr'>
    <h3 style={{textAlign:"center",fontFamily:"cursive"}}>add students</h3>
   <form class="needs-validation" novalidate>
    <br/>
  <div class="form-row">
    <div class="col-md-4 mb-3">

      <label for="validationCustom01">Student Name</label>
      <input 
      type="text"
      class="form-control" 
      id="validationCustom01" 
      placeholder="Name" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required 
      />

      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Student Address</label>

      <input 
      type="text" 
      class="form-control" 
      id="validationCustom02" 
      placeholder="Address"
      value={address} 
      onChange={(e) => setAddress(e.target.value)}
      required 
      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">

      <label for="validationCustom02">Student Tel</label>

      <input 
      type="text" 
      class="form-control" 
      id="validationCustom02" 
      placeholder="Telephone" 
      value={[tel]}
      onChange={(e) => setTel(e.target.value)}
      required 
      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-3">

      <label for="validationCustom02">Student Nic</label>

      <input 
      type="text" 
      class="form-control" 
      id="validationCustom02" 
      placeholder="Nic here" 
      value={nic}
      onChange={(e) => setNic(e.target.value)}
      required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <button class="btn btn-primary" type="submit" onClick={(e) => saveStudent(e)}>Save Student</button>
</form></div>

   </>
  )
}

export default AddStudentComponent
