import React from "react";

const Employee = ({name,image,department,jobtitle,email}) => {
    return(
        <div className="employee_data">
            <img src= {image} alt="employee"></img><br />
            <h4>{name}</h4>
            <span className="email">{email}</span>
            <span>{jobtitle} : {department}</span>

        </div>
    )
}

export default Employee