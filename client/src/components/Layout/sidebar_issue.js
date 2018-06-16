import "../../issue.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class sidebar_issue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active">
              <Link to="/issue">
                <span>Issue Drug</span>
              </Link>
            </li>
            <li>
            <Link to="/viewIssued">
                <span>View Stock</span>
              </Link>
            </li>
            <li>
            <Link to="/viewPress">
                <span>View Prescriptions</span>
              </Link>
            </li>
           
          
          </ul>
        </div>
      </aside>
    );
  }
}

export default sidebar_issue;
