//get the all the drugs which will expired within 90 days and set to a table

import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class ToBeExpDrug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.getExpdata = this.getExpdata.bind(this);
    this.getExpdata = this.getExpdata.bind(this);
  }

  getExpData() {
    axios
      .get("http://localhost:8080/drug/batch?Date=" + moment())
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const displayBatch = this.state.data.map(item => {
      return (
        <table className="table table-striped table-advance table-hover">
          <tbody>
            <tr>
              <th>Brand Name</th>
              <th>Batch Number</th>
              <th>Batch Type</th>
              <th>Content</th>
              <th>Number of packages</th>
              <th>Number of items</th>
              <th>Quantity</th>
              <th>Mfg</th>
              <th>Exp</th>
            </tr>
            <tr key={item._id}>
              <td key={item._id}>{item.Brand_name}</td>
              <td key={item._id}>{item.Batch_number}</td>
              <td key={item._id}>{item.Batch_type}</td>
              <td key={item._id}>{item.Content}</td>
              <td key={item._id}>{item.No_package}</td>
              <td key={item._id}>{item.No_items}</td>
              <td key={item._id}>{item.Qty}</td>
              <td key={item._id}>{item.Mfq}</td>
              <td key={item._id}>{item.Exp}</td>

              <td>
                <div class="btn-group">
                  <a class="btn btn-info" href="#">
                    Update
                  </a>
                  <a class="btn btn-danger" href="#">
                    Delete
                  </a>
                  <a class="btn btn-info" href="#">
                    Return
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });

    return (
      <div className="landing-inner">
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <h1 className="display-4 text-left">View Batch</h1>

              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>Brand Name</th>
                    <th>Batch Number</th>
                    <th>Batch Type</th>
                    <th>Content</th>
                    <th>Number of packages</th>
                    <th>Number of items</th>
                    <th>Quantity</th>
                    <th>Mfg</th>
                    <th>Exp</th>
                  </tr>
                  {displayBatch}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ToBeExpDrug;
