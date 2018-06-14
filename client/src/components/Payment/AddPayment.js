
import React, { Component } from "react";

import axios from "axios";

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        BillNo: "",
        Pres_Id:"",
        PayDate:"",
        Total:""
     
    };
    

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onSubmit(e) {
    e.preventDefault();

    const batchData = {
        BillNo: this.state.BillNo,
        Pres_Id: this.state.Pres_Id,
        PayDate: this.state.PayDate,
        Total: this.state.Total
      
    };
    // Add payment

    axios
      .post("http://localhost:8080/drug/batch", batchData)
      .then(res => {
        console.log(batchData);

        this.setState({
         
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    
  }
  

  

  //to get the drug data to fill combo
  componentDidMount() {
    axios
      .get("http://localhost:8080/issue")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          drugData: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    
    
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Issued Drugs Payments</h1>
              <form>
              <fieldset>
                    
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Prescription No: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Bill No: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Pay Date: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" readOnly/>
                    </div>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Total: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" readOnly/>
                    </div>            
                    </fieldset>
                    
                   <br/>
                    <button type="submit" class="btn btn-primary">Make Payment</button>
                
              </form>

                <br/>
                <div className="displaytable">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Drug Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-active">
                        <th scope="row">Active</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        </tr>
                        <tr>
                        <th scope="row">Default</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        </tr>
                        
                    </tbody>
                    </table> 
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPayment;