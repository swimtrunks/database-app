import React, { useEffect, useState } from "react";
import Employee from "./components/employee";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "./components/forms";
import Home from "./components/home";
import whiteLogo from "./stockphotos/whitetext-mploylogo.png";
import Search from "./components/search";

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
            <a href="/search">Search(Beta)</a>
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
            <Route path= "/search">
              <Search />
            </Route>
          </Switch>
        </div>
        <footer>
        <img src={whiteLogo} alt="white version of logo in footer" />
        
          <section>
            <div>Our Company</div>
            <a href="/" alt="dummy link">Home</a>
            <a href="/" alt="dummy link">Reviews</a>
            <a href="/" alt="dummy link">Sign Up</a>
            <a href="/" alt="dummy link">About Us</a>
            <a href="/" alt="dummy link">Contact Us</a>
            <a href="/" alt="dummy link">Free Trail</a>
          </section>
          <section>
          <div>Legal</div>
          <a href="/" alt="dummy link">Privacy Agreement</a>
          <a href="/" alt="dummy link">Terms of Service</a>
          <a href="/" alt="dummy link">Business Terms of Service</a>
          </section>
          <section>
            <div>Learn</div>
            <a href="/" alt="dummy link">Blog</a>
            <a href="/" alt="dummy link">API</a>
            <a href="/" alt="dummy link">Training</a>
            <a href="/" alt="dummy link">FAQ</a>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
