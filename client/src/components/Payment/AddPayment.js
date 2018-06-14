
import React, { Component } from "react";


import axios from "axios";

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        BillNo: "",
        Pres_Id:"",
        PayDate:"",
        Total:"",
        tot1:"",
        tot2:"",
        orderdata:[{
          "Pres_Id":"1",
          "Drug_name1":"panadol",
          "Drug_name2":"piriton",
          "Quantity1":"9",
          "Quantity2":"3",
          "Price1":"2",
          "Price2":"1"

        }]

     
    };
    

    //this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    
  }

  onSubmit(e) {
    e.preventDefault();

    const batchData = {
       BillNo: this.state.BillNo,
        Pres_Id: this.state.Pres_Id,
        PayDate: this.state.PayDate,
        Total: this.state.Total,
      
       

    };
    

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
    this.setState({[e.target.Pres_Id]:e.target.value});
  }

  onBillNoChange(e){
    this.setState({[e.target.BillNo]:e.target.value});
  }

  search(e) {
    const orderData = this.getIssuedDrugs();
    this.state.orderData.map(item => {
      var searchkey= new RegExp(this.state.key,"gi");
      if(this.state.key === ""){
        

      }
    })



    
  }
  

  


  getIssuedDrugs() {
    axios
      .get("http://localhost:8080/issue")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          orderData: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const a = this.state.orderdata.map(x=>{
     var tot1=(x.Price1)*(x.Quantity1);
     var tot2=(x.Price2)*(x.Quantity2);
     var total = tot1+tot2; 
      return(
        <tbody>
        <tr>
  
        <td>{x.Drug_name1}</td>
        <td>{x.Quantity1}</td>
        <td>{x.Price1}</td>
        <td value={tot1}>{tot1}</td>
        
        </tr>
        <tr>
  
        <td>{x.Drug_name2}</td>
        <td>{x.Quantity2}</td>
        <td>{x.Price2}</td>
        <td value={tot2}>{tot2}</td>
        
        </tr>
        </tbody>
    )
    });
    
    
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
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary"onClick={this.search()}>Search</button>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Bill No: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBillNoChange={this.onBillNoChange}/>
                    </div>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Pay Date: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter pay date" readOnly/>
                    </div>
                    <div class="form-group row">
                    <label for="exampleInputEmail1">Total: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly/>
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
                    
                       {a}
                    
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