
import React,{Component} from 'react';

import '../App';

import ReactDOM from "react-dom";

class Update extends Component{
    constructor(props){
        super(props);
        this.state= {
            Emp_Id:null,
            Email:null,
            Password:null,
            
        }
    }

    UpdateB(Emp_Id,Email,password){
     
        var data={"Emp_Id":Emp_Id,"Email":Email,"Password":password};

        console.log(data);

        if(Emp_Id==''||Email==''||password==''){
            alert('One or more fields empty please fill all the fields');
        }
        else{
           
            var foundemail=false;
            fetch('http://localhost:8080/emp/' + password, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                var user = JSON.stringify(data);
                console.log(user);
                if (user != '[]') {

                    alert('Password is already in use');
                }
                else{
                    fetch('http://localhost:8080/emp/Emp_Id'+data,{
                        method:'PUT',
                       body:JSON.stringify(data),
                       headers:{'Content-Type':'application/json'}
                   }).then(response=>{
                       return response.json();
                   }).then(data=>{
                       alert('Update employee');
                   }).catch(err=>{
                       alert(err);
                   })
                }

            }).catch(err => {
                alert("First Err: "+err);
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
                               
                                <h3>Update Employee Username and Password</h3>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Id</label>
                                    <input className="form-control"  aria-describedby="emailHelp" placeholder="Enter name" type="text" ref="Emp_Id"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email" ref="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Password" type="password" ref="password"/>
                                </div>
                                
                               
                                <button type="button" className="btn btn-primary" onClick={()=>{this.UpdateB()}}>Update</button>
                            </fieldset>
                        </form>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
}

export default Update;