import React from "react";
import {useForm} from "react-hook-form";

export default function Forms() {

  const {register, handleSubmit,reset} = useForm();

  //create employee (post)
  const submitPost =(data)=>{
    const params =  {
      name : `${data.name}`,
      department : `${data.department}`,
      job_title : `${data.job_title}`,
      email_address : `${data.email_address}`
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
  //update employee (patch)
  const submitPatch =(data)=>{

    console.log(data)

    const computedKey = data.key
    const params =  {
     [computedKey] : `${data.value}`
    }
    const patchMethod = {
      method:'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
       },
      body: JSON.stringify(params)
    }
    fetch(`http://localhost:3000/employees/${data.update_id}`, patchMethod)
    .then(response=>response.json())
    .then(response=>console.log(response))
    .then(reset())
    
  }
  //delete employee (delete)
  const submitDelete =(data)=>{

    const deleteMethod = {
      method:'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
       },
    }

    fetch(`http://localhost:3000/employees/${data.id}`, deleteMethod)
    .then(response=>response.json())
    .then(response=>console.log(response))
  }
  return(
    <div>
    <form onSubmit={handleSubmit(submitPost)}>
      <h3>create employee record</h3>
      <input type="text" placeholder="Full Name" {...register('name')}/>
      <input type="text" placeholder="Department" {...register('department')}/>
      <input type="text" placeholder="Job Title" {...register('job_title')}/>
      <input type="text" placeholder="Email Address" {...register('email_address')}/>
      <button type="submit">Submit</button>
     </form>

    <form onSubmit={handleSubmit(submitPatch)}className="update_form">
      <h3>update employee record</h3>
      <input type="text" placeholder="ID Number" {...register('update_id')}/>
      <select name="options" className="dropdown_list" {...register('key')}>
        <option value="">--Choose Option--</option>
        <option value="department">Department</option>
        <option value="email_address">Email</option>
        <option value="job_title">Job Title</option>
        <option value="name">Full Name</option>
      </select>
      <input type="text" placeholder="Update" {...register('value')}></input>
      <button type="submit">Submit</button>
    </form>

    <form onSubmit={handleSubmit(submitDelete)}>
      <h3>delete employee record</h3>
      <input type="text" placeholder="ID Number" {...register('id')}/>
      <button type="submit">Delete</button>
    </form>
</div>
  )
}
