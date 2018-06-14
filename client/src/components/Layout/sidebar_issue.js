import React, { Component } from "react";
import '../../issue.css';
import { Link } from 'react-router-dom';



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
                <span>View Drugs</span>
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
