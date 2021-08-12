import React from "react";

const Employee = ({id,name,image,department,jobtitle,email}) => {
    return(
        <div className="employee_data">
            <img src= {image} alt="employee"></img><br />
            <h4>{name}</h4>
            <span className="email">{email}</span>
            <span>{jobtitle} : {department}</span><br /><br />
            <span>ID#: {id}</span>

        </div>
    )
}

export default Employee