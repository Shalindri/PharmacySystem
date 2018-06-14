import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
//import Landing from "./components/Layout/Landing";
//import AddDrug from "./components/drug/AddBatch";
import Sidebar from "./components/Layout/Sidebar";
import "./App.css";
import AddBatch from "./components/drug/ViewBatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />

        <AddBatch />

        <Footer />
      </div>
    );
  }
}

export default App;
