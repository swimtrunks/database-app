import React from "react";
import {useForm} from "react-hook-form";

export default function Register() {

  const {register, handleSubmit} = useForm();

  //create employee (post)
  const submitPost =(data)=>{
    console.log(data)
  }
  //update employee (patch)
  const submitPatch =(data)=>{
    console.log(data)
  }
  //delete employee (delete)
  const submitDelete =(data)=>{
    console.log(data.id)
  }
  return(
    <div>
    <form onSubmit={handleSubmit(submitPost)}>
      <h3>create employee record</h3>
      <input type="text" placeholder="Full Name" {...register('name')}/>
      <input type="text" placeholder="Department" {...register('department')}/>
      <input type="text" placeholder="Job Title" {...register('job_title')}/>
      <input type="text" placeholder="Email Address" {...register('email')}/>
      <button type="submit">Submit</button>
     </form>

    <form onSubmit={handleSubmit(submitPatch)}className="update_form">
      <h3>update employee record</h3>
      <input type="text" placeholder="ID Number" {...register('update_id')}/>
      <select name="options" className="dropdown_list" {...register('key')}>
        <option value="">--Choose Option--</option>
        <option value="department">Department</option>
        <option value="email">Email</option>
        <option value="job">Job Title</option>
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
