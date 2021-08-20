import React from "react";
import {useForm} from "react-hook-form";
import sittingserver from "../stockphotos/sittingonservers.jpg"

export default function Register() {

  const {register, handleSubmit, formState:{errors}, reset} = useForm();

  //create employee (post)
  const submitPost =(data)=>{
    const params =  {
      name : `${data.name}`,
      department : `${data.department}`,
      job_title : `${data.job_title}`,
      email_address : `${data.email_address}`,
      image: 'https://winaero.com/blog/wp-content/uploads/2015/05/windows-10-user-account-login-icon.png'
    }
    const postMethod = {
      method:'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
       },
      body: JSON.stringify(params)
    }
    fetch("http://localhost:3000/employees/", postMethod)
    .then(response=>response.json())
    .then(response=>console.log(response))
    reset()
  }
  
  return(
    <div className="register-page fade-in">
    <img src ={sittingserver} alt="guy sitting on server" className="register-image" />
    <form onSubmit={handleSubmit(submitPost)} className="register-form">
      <h3 className="form-header register-header">Register Employee</h3>
      <input type="text" placeholder="Full Name" {...register('name', {required:true})}/>
      {errors.name && <p className="error-message">This required.</p>}
      <input type="text" placeholder="Department" {...register('department',{required:true})}/>
      {errors.department && <p className="error-message">This required.</p>}
      <input type="text" placeholder="Job Title" {...register('job_title',{required:true})}/>
      {errors.job_title && <p className="error-message">This required.</p>}
      <input type="text" placeholder="Email Address" {...register('email_address',{required:true})}/>
      {errors.email_address && <p className="error-message">This required.</p>}
      <button type="submit"className="register-button">Register!</button>
     </form>
</div>
  )
}
