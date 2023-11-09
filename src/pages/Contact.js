import React from 'react'

export default function Contact() {
  return (
<div>
      <div>
      <h2 className='text-center mt-4'> Contact Us </h2>
      <form>
          <div className="mb-3">
            <label className="form-label"> Your Name</label>
            <input type="text" className="form-control form-control-sm" required  placeholder='Enter your First and Last Name' />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number </label>
            <input type="text" className="form-control form-control-sm"  placeholder=' to begin with 254'/>
          </div>
          <div className="mb-3">
            <label className="form-label">Provide More details </label>
            <textarea className="form-control" rows="2" placeholder=' type your details here '  ></textarea>
          </div>


          <button type="submit" className="btn btn-primary">Submit Details</button>  
        </form>
    </div>
    </div>
  )
}
