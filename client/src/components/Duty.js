import React, { Component } from "react";

import '../App';

import ReactDOM from "react-dom";

class Duty extends Component{
    constructor(props){
        super(props);
    }

  signup(){
    const Duty_Id=this.refs.Duty_Id.value;
    const Emp_Id=this.refs.Emp_Id.value;
    const Date=this.refs.Date.value;
    const TimeTo=this.refs.TimeTo.value;
    const TimeFrom=this.refs.TimeFrom.value;
 

    if(Duty_Id==''||Emp_Id==''||Date==''||TimeTo==''||TimeFrom==''){
        alert('One or more fields empty');
    }
   
            else{

                var data={"Duty_Id":Duty_Id,"Emp_Id":Emp_Id,"Date":Date,"TimeTo":TimeTo,"TimeFrom":TimeFrom};
                console.log(data);
                fetch('http://localhost:8080/duty/', {
                    method: 'POST',
                    body:JSON.stringify(data),
                    headers: {'Content-Type': 'application/json'}
                }).then(response => {
                    return response.json();
                }).then(data => {
                    alert('Successful assign');
                    
                }).catch(err => {
                    alert("Second "+err);
                })
            

    }
}
  
  render() {
   

    return (
     

        <div className="container">
                <div className="backimg">

                    <div className="paddinglog">
                        <div class="progress">
                            <div class="progress-bar bar1" role="progressbar"  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-success bar2" role="progressbar"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div class="progress-bar bg-info bar3" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <form className="paddingsub">
                                <fieldset>
                                    <legend>Duty Assign</legend>
                                
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Duty Id</label>
                                        <input className="form-control"  placeholder="id" type="text" ref="Duty_Id"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Employee Id</label>
                                        <input className="form-control" placeholder="type" type="text" ref="Emp_Id"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input className="form-control" placeholder="Username" type="date" ref="Date"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1"> To</label>
                                        <input className="form-control" placeholder="Enter email" type="time" ref="TimeTo"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1"> From</label>
                                        <input className="form-control" placeholder="Enter email" type="time" ref="TimeFrom"/>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.signup()}}>Submit</button>
                                </fieldset>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
      
    );
  }
}

export default Duty;