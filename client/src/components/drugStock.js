import React, { Component } from "react";
import axios from "axios";

class drugStock extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/drug/batch")
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
          <td key={item._id}>{item.Brand_name}</td>
          <td key={item._id}>{item.Exp}</td> 
          <td key={item._id}>{item.Mfg}</td>
          <td key={item._id}>{item.Qty}</td>
        </tr>
      );
    });
    return (
          <div className="row">
            
              <section className="panel">
                
  
                <table className="table table-striped table-advance table-hover">
                  <tbody>
                    <tr>
                      <th>Drug Name</th>
                      <th>Expiary Date</th>
                      <th>Manufacture Date</th>
                      <th>Quantity</th>
                      
                    </tr>
                    {displayBatch}
                  </tbody>
                </table>
              </section>
            
          </div>
        
      );
    }

}

export default drugStock;