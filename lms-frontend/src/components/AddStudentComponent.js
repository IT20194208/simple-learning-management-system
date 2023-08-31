import React from 'react'
import '../css/Addstudent.css';
const AddStudentComponent = () => {
  return (
   <>
   <div className='containerr'>
    <h3 style={{textAlign:"center",fontFamily:"cursive"}}>add students</h3>
   <form class="needs-validation" novalidate>
    <br/>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Student Name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Student Address</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Address" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Student Tel</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Telephone" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-3">
      <label for="validationCustom02">Student Nic</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Nic here" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <button class="btn btn-primary" type="submit">Save Student</button>
</form></div>

   </>
  )
}

export default AddStudentComponent
