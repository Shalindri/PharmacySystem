import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active">
              <a className="" href="index.html">
                <span>Dashboard</span>
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

export default Sidebar;
