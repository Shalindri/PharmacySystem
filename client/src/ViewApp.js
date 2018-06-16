import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Navbar from "./components/Layout/Navbar";
//import Footer from "./components/Layout/Footer";
//import Sidebar from "./components/Layout/Sidebar";

import EmployeeDetails from "./components/EmployeeDetails";
import axios from "axios";


class DutyApp extends Component {
  render() {
    return (
      <div className="App">
        
          
          <div className="row">
          
        
        <EmployeeDetails/>
       
         
         
         </div>

        
       

 
        
      </div>
    );
  }
}

export default DutyApp;
