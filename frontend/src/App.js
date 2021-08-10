import React, { useEffect, useState } from "react";
import Employee from "./employee";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Forms from "./forms";
import Home from "./home";

//get employees from api and display them on page
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
    <Router>
    <div>
      <header>
      <h1>mPloy-db</h1>
      <nav>
        <a href ="/">Home</a>
        <a href ="/directory">Directory</a>
        <a href ="/forms">Forms </a>
      </nav>
      </header>
      
      <div className="App">
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/forms">
          <Forms />
        </Route>
         <Route path="/directory">
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
        </Route>
       </Switch>
       
      </div>
    </div>
    </Router>
  );
};

export default App;
