import React from "react";

const Employee = ({name,image,department,jobtitle,email}) => {
    return(
        <div className="employee_data">
            <h4>{name}</h4>
            <span className="email">{email}</span>
            <img src= {image} alt="employee"></img><br />
            <span>{jobtitle} </span>
        </div>
    )
}

export default Employee