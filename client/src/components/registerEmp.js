
import React,{Component} from 'react';

import '../App';

import ReactDOM from "react-dom";

class Register extends Component{
    constructor(props){
        super(props);
    }

    signup(){
        const Emp_Id=this.refs.Emp_Id.value;
        const Type=this.refs.Type.value;
        const Emp_name=this.refs.Emp_name.value;
        const Email=this.refs.Email.value;
        const Password=this.refs.Password.value;
        const Address=this.refs.Address.value;
        const Telephone=this.refs.Telephone.value;
        const Date=this.refs.Date.value;

        if(Emp_Id==''||Type==''||Emp_name==''||Email==''||Password==''||Address==''||Telephone==''||Date==''){
            alert('One or more fields empty');
        }
       
                else{

                    var data={"Emp_Id":Emp_Id,"Type":Type,"Emp_name":Emp_name,"Email":Email,"Password":Password,"Address":Address,"Telephone":Telephone,"Date":Date};
                    console.log(data);
                    fetch('http://localhost:8080/emp/', {
                        method: 'POST',
                        body:JSON.stringify(data),
                        headers: {'Content-Type': 'application/json'}
                    }).then(response => {
                        return response.json();
                    }).then(data => {
                        alert('Successful Sign Up');
                        
                    }).catch(err => {
                        alert("Second "+err);
                    })
                

        }
    }


    render(){

        return(
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
                                    <legend>New Employee Registration</legend>
                                
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Employee Id</label>
                                        <input className="form-control"  placeholder="id" type="text" ref="Emp_Id"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Employee Type</label>
                                        <input className="form-control" placeholder="type" type="text" ref="Type"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Employee name</label>
                                        <input className="form-control" placeholder="Username" type="text" ref="Emp_name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input className="form-control" placeholder="Enter email" type="email" ref="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input className="form-control"  placeholder="Password" type="password" ref="Password"/>
                                    </div>
                                        <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Address</label>
                                        <input className="form-control" id="exampleInputadd"  placeholder="Address" type="text" ref="Address"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Telephone</label>
                                        <input className="form-control"   type="text" ref="Telephone"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input className="form-control"   type="date" ref="Date"/>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={()=>{this.signup()}}>Submit</button>
                                </fieldset>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Register;