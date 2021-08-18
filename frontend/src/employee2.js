import React from "react";

const Employee2 = ({employees,loading,key}) => {
    if(loading){
        return <h2>Loading.</h2>
     }

    return(
        <div>
            {employees.map((employee) => (
                <div key={employee._id} className="employee_data fade-in">
                <img src= {employee.image} alt="employee"></img><br />
                <h4>{employee.name}</h4>
                <span className="email">{employee.email_address}</span>
                <span>{employee.job_title} : {employee.department}</span><br /><br />
                <span>ID#: {employee._id}</span>
                </div>
            ))}
        </div>
    )
}

export default Employee2