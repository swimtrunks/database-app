import React, { useEffect, useState } from "react";
import Employee from "./employee";
import "./App.css";

const App = () => {
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
    <div className="App">
      <h1>mPloy-db</h1>
      {employees.map((employee) => (
        <Employee
          key={employee._id}
          name={employee.name}
          image={employee.image}
          jobtitle={employee.job_title}
          department={employee.department}
          email={employee.email_address}
        />
        
      ))}
    </div>
  );
};

export default App;
