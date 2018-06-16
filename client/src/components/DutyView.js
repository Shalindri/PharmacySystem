import React, { Component } from "react";
import axios from "axios";

class ViewDuty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/duty/")
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
    const display = this.state.data.map(item => {
      return (
        <tr key={item._id}>
          <td key={item._id}>{item.Duty_Id}</td>
          <td key={item._id}>{item.Emp_Id}</td>
          <td key={item._id}>{item.TimeTo}</td>
          <td key={item._id}>{item.TimeFrom}</td>
          <td key={item._id}>{item.Date}</td>

          
        </tr>
      );
    });

    return (
      <div className="landing-inner">
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <h1 className="display-4 text-left">View DU</h1>

              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>Duty Id</th>
                    <th>Employee Id</th>
                    <th>Time To</th>
                    <th>Time From</th>
                    <th>Date</th>
                  </tr>
                  {display}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewDuty;
