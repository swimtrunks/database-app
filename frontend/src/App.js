import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/register";
import Edit from "./components/editemployee";
import Home from "./components/home";
import Search from "./components/search";
import whiteLogo from "./stockphotos/whitetext-mploylogo.png";
import menuIcon from "./stockphotos/whitemenuicon.png"
const App = () => {
  return (
    <Router>
      <div>
        <header>
          <img
            src={whiteLogo}
            className="headerLogo"
            alt="mploy logo in white"
          ></img>
          <nav className="navbar">
            <a href="/">Home</a>
            <a href="/directory">Directory</a>
            <a href="/register">Register </a>
            <a href="/edit">Edit Employee</a>
          </nav>
          <nav className="mobile-nav">
          <img src={menuIcon} className="mobile-nav-icon"alt="mobile menu icon" />
          </nav>
        </header>

        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route path="/directory">
              <Search />
            </Route>
          </Switch>
        </div>
        <footer>
          <img src={whiteLogo} alt="white version of logo in footer" />

          <section>
            <div>Our Company</div>
            <a href="/" alt="dummy link">
              Home
            </a>
            <a href="/" alt="dummy link">
              Reviews
            </a>
            <a href="/" alt="dummy link">
              Sign Up
            </a>
            <a href="/" alt="dummy link">
              About Us
            </a>
            <a href="/" alt="dummy link">
              Contact Us
            </a>
            <a href="/" alt="dummy link">
              Free Trail
            </a>
          </section>
          <section>
            <div>Legal</div>
            <a href="/" alt="dummy link">
              Privacy Agreement
            </a>
            <a href="/" alt="dummy link">
              Terms of Service
            </a>
            <a href="/" alt="dummy link">
              Business Terms of Service
            </a>
          </section>
          <section>
            <div>Learn</div>
            <a href="/" alt="dummy link">
              Blog
            </a>
            <a href="/" alt="dummy link">
              API
            </a>
            <a href="/" alt="dummy link">
              Training
            </a>
            <a href="/" alt="dummy link">
              FAQ
            </a>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
