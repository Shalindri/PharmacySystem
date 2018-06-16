import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class ViewBatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      expdata: []
    };
    this.onClickExp = this.onClickExp.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
   // this.getVal = this.getVal.bind(this);
  }

 
//check this
sendEmail(e) {
  alert("Email sent to supplier"+e.target.id)
  
  axios
    .get("http://localhost:8080/drug/id?="+e.target.id )
    .then(Response => {
      
      alert("Email is sent to supplier"+e.target.id)
    })
    .catch(err => {
      console.log("cannot set data");
      alert("supplier cannot be notified via email")
    });
}
  onClickExp(e) {
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    };

    var nd = new Date().addDays(30);

    console.log("Iso string" + nd.toISOString());
    axios
      .get("http://localhost:8080/drug/batch?Date=" + nd.toISOString())
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          expdata: data
        });
      })
      .catch(err => {
        console.log("cannot set data");
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/drug/batch")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          data: data
        });
        //  console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //

  render() {
    //Display all the batch data
    const displayBatch = this.state.data.map(item => {
      return (
        <tr key={item._id}>
          <td key={item._id}>{item.Brand_name}</td>
          <td key={item._id}>{item.Batch_number}</td>
          <td key={item._id}>{item.Batch_type}</td>
          <td key={item._id}>{item.Content}</td>
          <td key={item._id}>{item.No_packages}</td>
          <td key={item._id}>{item.No_items}</td>
          <td key={item._id}>{item.Qty}</td>
          <td key={item._id}>{item.Mfg}</td>
          <td key={item._id}>{item.Exp}</td>
          <td>
            <div className="btn-group">
              
              <a className="btn btn-danger" >
                Delete
              </a>
            </div>
          </td>
        </tr>
      );
    });

    //display all the exp data

    const ExpTable = this.state.expdata.map(item => {
      return (
        <tr key={item._id}>
          <td key={item._id}>{item.Brand_name}</td>
          <td key={item._id}>{item.Batch_number}</td>
          <td key={item._id}>{item.Batch_type}</td>
          <td key={item._id}>{item.Content}</td>
          <td key={item._id}>{item.No_packages}</td>
          <td key={item._id}>{item.No_items}</td>
          <td key={item._id}>{item.Qty}</td>
          <td key={item._id}>{item.Mfg}</td>
          <td key={item._id}>{item.Exp}</td>

          <td>
            <div class="btn-group">
              
              <a class="btn btn-danger" >
                Delete
              </a>
              <a class="btn btn-info"
                id={item._id}
                value={item._id}
                className="btn btn-danger"
                onClick={this.sendEmail} >
               Send Return Req
              </a>
            </div>
          </td>
        </tr>
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
                    <th>Action</th>
                  </tr>
                  {displayBatch}
                </tbody>
              </table>
              <a class="btn btn-danger" onClick={this.onClickExp}>
                Expired Drugs
              </a>
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
                    <th>Action</th>
                  </tr>
                  {ExpTable}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBatch;
