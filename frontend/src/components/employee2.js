import React from "react";
import blackLogo from "../stockphotos/blacktext-mploylogo.png"

const Employee2 = ({employees,loading,key}) => {
    if(loading){
        return <img className="loadingLogo" src={blackLogo} alt="black logo"/>
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