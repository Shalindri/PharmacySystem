import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import ViewDrugs from "./components/drug/ViewDrugs";
import Sidebar from "./components/Layout/Sidebar";
import "./App.css";
import AddBatch from "./components/drug/AddBatch";
import UpdateDrug from "./components/drug/UpdateDrug";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />

        <ViewDrugs />

        <Footer />
      </div>
    );
  }
}

export default App;
