import React, { Component } from "react";
import axios from "axios";

class Prescriptions extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/issue/")
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
        <tr key={item._id}>
          <td key={item._id}>{item.Pres_Id}</td>
          <td key={item._id}>{item.Pid}</td>
          <td key={item._id}>{item.Patient_name}</td> 
          <td key={item._id}>{item.Drug_type1}<br></br>{item.Drug_type2}</td>
          <td key={item._id}><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
      );
    });
    return (
          <div className="row">
            <div className="col-lg-12">
              <section className="panel">
                
  
                <table className="table table-striped table-advance table-hover">
                  <tbody>
                    <tr>
                      <th>Prescription ID</th>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th>Drugs Assigned</th>
                      <th>Period</th>
                      
                    </tr>
                    {displayBatch}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        
      );
    }

}

export default Prescriptions;