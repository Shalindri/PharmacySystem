import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
//import Landing from "./components/Layout/Landing";
import AddDrug from "./components/drug/ViewDrugs";
import Sidebar from "./components/Layout/Sidebar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />

        <AddDrug />

        <Footer />
      </div>
    );
  }
}

export default App;
