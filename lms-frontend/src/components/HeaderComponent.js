import React from 'react'

const HeaderComponent = () => {
  return (
    <header class="p-3 bg-dark text-white">
    <div class="container" style={{marginBottom:"6px"}}>
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <span class="fs-4" style={{marginRight:"10px"}}>Learning Management System</span>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-secondary" style={{marginTop:"6px"}}>Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white" style={{marginTop:"6px"}}>Courses</a></li>
          <li><a href="/students" class="nav-link px-2 text-white" style={{marginTop:"6px"}}>Students</a></li>
          <li><a href="#" class="nav-link px-2 text-white" style={{marginTop:"6px"}}>About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HeaderComponent
