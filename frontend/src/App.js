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
        <img src={whiteLogo} />
        
          <section>
            <div>Our Company</div>
            <a href="">Home</a>
            <a href="">Reviews</a>
            <a href="">Sign Up</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Free Trail</a>
          </section>
          <section>
          <div>Legal</div>
          <a href="">Privacy Agreement</a>
          <a href="">Terms of Service</a>
          <a href="">Business Terms of Service</a>
          </section>
          <section>
            <div>Learn</div>
            <a href="">Blog</a>
            <a href="">API</a>
            <a href="">Training</a>
            <a href="">FAQ</a>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
