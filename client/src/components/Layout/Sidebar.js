import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <a>View Drug</a>
        <a>Add Drug</a>
        <a>View Stock</a>
        <a>Add Stock</a>
      </div>
    );
  }
}

export default Sidebar;
