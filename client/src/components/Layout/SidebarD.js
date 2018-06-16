import "../../issue.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SidebarD extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active">
              <Link to="/addDrug">
                <span>Add Drug</span>
              </Link>
            </li>
            <li>
            <Link to="/addBatch">
                <span>Add Batch</span>
              </Link>
            </li>
            <li>
            <Link to="/viewDrug">
                <span>View Drug</span>
              </Link>
            </li>
            <li>
            <Link to="/viewBatch">
                <span>View Batch</span>
              </Link>
            </li>
          
          </ul>
        </div>
      </aside>
    );
  }
}

export default SidebarD;
