import React, { useEffect, useState } from "react";
import Employee from "./employee";
import {useForm} from "react-hook-form";

const Search = () => {

  const {register, handleSubmit} = useForm();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await fetch("http://localhost:3000/employees/");
    const data = await response.json();
    console.log(data);
    setEmployees(data);
  };

  return (
    <div>
    <form onSubmit={handleSubmit()}className="searchbar">
      <input type="text" {...register('query')}/>
      
      <button className="searchButton"type="submit">Submit</button>
    </form>
 
              {employees.filter((employee) => (
                employee.name.includes("Malcolm")))
                .map(employee =>
                <Employee
                  key={employee._id}
                  id={employee._id}
                  name={employee.name}
                  image={employee.image}
                  jobtitle={employee.job_title}
                  department={employee.department}
                  email={employee.email_address}
                />
              )}
    
    </div>
    )
}


export default Search;
