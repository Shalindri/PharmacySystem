import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Pharmacy System</h1>
                <hr />
                <Link to="/vapp">
                  <a href="login.html" className="btn btn-lg btn-light">
                    Employee Handling 
                  </a>
                </Link>
                <Link to="/addDrug">
                  <a href="login.html" className="btn btn-lg btn-light">
                    Drug Handling
                  </a>
                </Link>
                <Link to="/issue">
                  <a href="login.html" className="btn btn-lg btn-light">
                    Issue Drugs
                  </a>
                </Link>
                <Link to="/payment">
                  <a href="login.html" className="btn btn-lg btn-light">
                    Payment Handling
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
