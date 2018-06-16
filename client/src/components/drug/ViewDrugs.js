import React, { Component } from "react";
import axios from "axios";

class ViewDrugs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.onDelete = this.onDelete.bind(this);
  }

  // onDelete(e) {
  //  this.setState(
  //   this.
  // );
  //}

  componentDidMount() {
    axios
      .get("http://localhost:8080/drug/drugs")
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

  onDelete(e) {
    axios
      .delete("http://localhost:8080/drug/drugs/" + e.target.id)
      .then(res => {
        alert("Drug deleted" + res.data.status);
        // console.log(drugData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const displayDrug = this.state.data.map(item => {
      return (
        <tr key={item._id}>
          <td key={item._id}>{item.Brand_name}</td>
          <td key={item._id}>{item.Generic_name}</td>
          <td key={item._id}>{item.Dosage}</td>
          <td key={item._id}>{item.Category}</td>
          <td key={item._id}>{item.Type}</td>
          <td key={item._id}>{item.Unit_price}</td>
          <td key={item._id}>{item.Selling_price}</td>
          <td key={item._id}>{item.Danger_level}</td>
          <td key={item._id}>{item.Reorder_level}</td>
          <td key={item._id}>{item.Supplier}</td>
          <td>
            <div className="btn-group">
              <a className="btn btn-info">Update</a>
              <a
                id={item._id}
                value={item._id}
                className="btn btn-danger"
                onClick={this.onDelete}
              >
                Delete
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
              <h1 className="display-4 text-left">View Drug</h1>

              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>Brand Name</th>
                    <th>Generic Name</th>
                    <th>Dosage</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>unitPrice</th>
                    <th>Selling Price</th>
                    <th>Danger Level</th>
                    <th>Reorder Level</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                  {displayDrug}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewDrugs;
