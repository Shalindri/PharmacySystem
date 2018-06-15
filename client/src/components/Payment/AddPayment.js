
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
        orderData:[]

        

     
    };
    
    //this.getIssuedDrugs=this.getIssuedDrugs.bind(this);
    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    
  }

  onSubmit(e) {
    e.preventDefault();

    const batchData = {
       BillNo: this.state.BillNo,
        Pres_Id: this.state.Pres_Id,
        PayDate: this.state.PayDate,
        Total: this.state.Total,
        value:''
      
       

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
      
    onPresSubmit(e){
      e.preventDefault();
      var Total;
      //var a = this.state.value;
      if (this.x===1){
        Total=15;
        console.log("p1");
      }
      else{
        Total=9;
        console.log("p2");
      }
      return Total;

    }






  onChange(e) {
    var x = this.setState({[e.target.Pres_Id]:e.target.value});
    
  }

  onBillNoChange(e){
    this.setState({[e.target.BillNo]:e.target.value});
  }

  //to load the table
  componentDidMount() {
    axios
      .get("http://localhost:8080/issue")
      .then(Response => {
        var data = Response.data.data;
        console.log("table");
        this.setState({
          orderData: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  autoIncrement(){
    
  }

 
  

 


  render() {
    const a = this.state.orderData.map(x=>{
     var tot1=(2)*(x.Quantity1);
     var tot2=(1)*(x.Quantity2);
     console.log("total");
     var total = tot1+tot2;
     this.total=this.state.total;
    
     
     
      return(
        <tbody>
        <tr>
  
        <td>{x.Pres_Id}</td>
        <td>{x.Drug_name1}</td>
        <td>{x.Quantity1}</td>
        <td>2</td>
        <td>{tot1}</td>
        </tr>
        <tr>
        <td>{x.Pres_Id}</td>
        <td>{x.Drug_name2}</td>
        <td>{x.Quantity2}</td>
        <td>1</td>
        <td>{tot2}</td>
        
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
                    <label for="prescription">Prescription No: </label>
                    <input type="text" class="form-control" value={this.state.value}   placeholder="Enter Prescription No" onChange={this.onChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.onPresSubmit} >Search</button>
                   
                    <div class="form-group row">
                    <label for="Bill No">Bill No: </label>
                    <input type="text" class="form-control" id="BillNo"  placeholder="Bill No" readOnly/>
                    </div>
                    <div class="form-group row">
                    <label for="date">Pay Date: </label>
                    <input type="text" class="form-control" id="Date"  placeholder="Pay Date" readOnly/>
                    </div>
                    <div class="form-group row">
                    <label for="total">Total: </label>
                    <input type="text" class="form-control" value={this.state.total}  readOnly/>
                    </div>            
                    </fieldset>
                    
                   <br/>
                    
                
              </form>

                <br/>
                <div className="displaytable">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Prescription No</th>
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