import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="" component={} />
          <Route exact path="" component={} />
        </Switch>
        <Footer />
      </div>

    </Router>
  );
}


export default App;
