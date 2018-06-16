import "../../issue.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SidebarE extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active">
              <Link to="/vapp">
                <span>View Employees</span>
              </Link>
            </li>
            <li>
            <Link to="/eapp">
                <span>Add New Employees</span>
              </Link>
            </li>
            <li>
            <Link to="/dapp">
                <span>Add Duties</span>
              </Link>
            </li>
            
          
          </ul>
        </div>
      </aside>
    );
  }
}

export default SidebarE;
