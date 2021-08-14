import React, { useEffect, useState } from "react";
import Employee from "./employee";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "./forms";
import Home from "./home";
import whiteLogo from "./stockphotos/whitetext-mploylogo.png";

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
          <img
            src={whiteLogo}
            className="headerLogo"
            alt="mploy logo in white"
          ></img>
          <nav>
            <a href="/">Home</a>
            <a href="/directory">Directory</a>
            <a href="/forms">Forms </a>
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
                  id={employee._id}
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
        <footer>
        <img src={whiteLogo} alt="white version of logo in footer" />
        
          <section>
            <div>Our Company</div>
            <a href="/home" alt="dummy link">Home</a>
            <a href="/home" alt="dummy link">Reviews</a>
            <a href="/home" alt="dummy link">Sign Up</a>
            <a href="/home" alt="dummy link">About Us</a>
            <a href="/home" alt="dummy link">Contact Us</a>
            <a href="/home" alt="dummy link">Free Trail</a>
          </section>
          <section>
          <div>Legal</div>
          <a href="/home" alt="dummy link">Privacy Agreement</a>
          <a href="/home" alt="dummy link">Terms of Service</a>
          <a href="/home" alt="dummy link">Business Terms of Service</a>
          </section>
          <section>
            <div>Learn</div>
            <a href="/home" alt="dummy link">Blog</a>
            <a href="/home" alt="dummy link">API</a>
            <a href="/home" alt="dummy link">Training</a>
            <a href="/home" alt="dummy link">FAQ</a>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
