import React, { Component } from "react";
import {Link} from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
        <div class="sidenav">
            <Link to="/addDrug">Add Drug</Link>
            <Link to="/addBatch">Add Batch</Link>
            <Link to="/viewDrug">View Drug</Link>
            <Link to="/viewBatch">View Batch</Link>
        </div>
    );
  }
}

export default Sidebar;
