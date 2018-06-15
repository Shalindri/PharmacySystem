import React, { Component } from "react";
import '../../issue.css';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import View from '../viewDrugs';
import ReactDOM from 'react-dom';


class sidebar_issue extends Component {

  constructor(props) {
    super(props);
}


  render() {
    return (
      
      <aside >
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active">
              <a className="" href="index.html">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a className="nav-item" href="chart-chartjs.html">
                <span>Issue Drugs</span>
                
              </a>
            </li>
            <li>
            <a className="nav-item" href="chart-chartjs.html">
                <span>View Drugs
                </span>
                </a>
            </li>
            <li>
              <a className="" href="chart-chartjs.html">
                <span>Charts</span>
              </a>
            </li>
            <li>
              <a className="" href="chart-chartjs.html">
                <span>Charts</span>
              </a>
            </li>
          </ul>
           </div>
      </aside>
      
    );
  }
}

export default sidebar_issue;
