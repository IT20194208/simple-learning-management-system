import React, {useEffect, useState} from 'react'
import '../css/Addstudent.css';
import StudentServices from '../services/StudentServices';
import { useHistory,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
const AddStudentComponent = () => {

  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [tel,setTel]=useState('')
  const [nic,setNic]=useState('')  
  const history = useHistory();
  const {id} = useParams();
//---------------------------
  const saveOrupdateStudent = (e) => {
    e.preventDefault();
    const student = {name,address,tel,nic}

    if(id){

      StudentServices.updateStudent(id,student).then((response) =>{
        swal("Student Updated!", "updated successfully!", "success");
        history.push('/students')
      }).catch(error =>{
        console.log(error);
      })

    }else{
      StudentServices.createStudent(student).then((response) =>{

        console.log(response.data)
        swal("Good job!", "student adding successfully!", "success");
        history.push('/students');

    }).catch(error => {
        console.log(error)
    })
    // console.log(student);
    }
    
  }

  //-------------------------//
  useEffect(() => {

    StudentServices.getStudentById(id).then((response) =>{
        setName(response.data.name)
        setAddress(response.data.address)
        setTel(response.data.tel)
        setNic(response.data.nic)
    }).catch(error => {
      console.log(error)
  })

  },[])

  const title = () => {
    if(id){
      return <h3 className='text-center'>Update Student</h3>
    }else{
      return <h3 className='text-center'>Add Student</h3>
    }
  }

  return (
   <>
   <div className='containerr'>
    {
      title()
    }
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
      required
      value={nic}
      onChange={(e) => setNic(e.target.value)}
       />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <button class="btn btn-primary" type="submit" onClick={(e) => saveOrupdateStudent(e)}>Save Student</button>
  {/* <Link to ="/students" className="btn btn-primary mb-2">go back</Link> */}
</form></div>

   </>
  )
}

export default AddStudentComponent
