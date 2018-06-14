import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import IssueSearch from "./components/IssueSearch";
import AddPayment from "./components/Payment/AddPayment";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AddPayment/>
       

        <Footer />
      </div>
    );
  }
}

export default App;
