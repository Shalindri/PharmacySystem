import React, { Component } from 'react';

import App from '../App';
import VApp from '../ViewApp';

import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import SidebarD from "./Layout/SidebarD";

import AddDrug from "./drug/AddDrug";





class login extends Component{

login(e){

    e.preventDefault();
 
    var user=this.refs.username.value;
   var password=this.refs.pass.value;
    console.log(user);
    console.log(password);
   
 
   if(user==="admin"){
   
                if(password==="a123"){
            
                    ReactDOM.render(<Route
                        exact
                        path="/addDrug"
                        render={() => {
                            return (
                              <div>
                                <Navbar />
                                <div className="row">
                                <div className="col-md-3">
                                <SidebarD />
                                </div>
                                <div className="col-md-8">
                                <AddDrug />
                                </div>
                                </div>
                                <Footer />
                              </div>
                            );
                          }}
                        />,document.getElementById('root'));
                    }
                else{
            
                    alert("incorrect password");
                }
   }
   else if(user==""){
                if(password==="a123"){
            
                    ReactDOM.render(<App/>,document.getElementById('root'));
                    }
                else{
            
                    alert("incorrect password");
                }
   }

   else if(user==""){
                        if(password==="a123"){
                    
                            ReactDOM.render(<App/>,document.getElementById('root'));
                            }
                        else{
                    
                            alert("incorrect password");
                        }

                    }
   else if(user==""){

                    if(password==="a123"){
                                    
                        ReactDOM.render(<App/>,document.getElementById('root'));
                        }
                    else{

                        alert("incorrect password");
                    }

   }
   else{

    alert("invalid user");
   }

  }
render(){
  return(
    <form className="form-horizontal">
    <fieldset>
    
    <div className="col-md-5">
     <div className="form-group">
    <label htmlFor="inputEmail" className="col-lg-2 control-label">User name</label>
    <div className="col-lg-5">
 
    <input type="text" className="form-control" id="username" ref="username"/>   
   </div> 
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail" className="col-lg-2 control-label">Pasaword</label>
         <div className="col-lg-5">
         
          <input type="password" className="form-control" id="pass" ref="pass" />
          </div>
        </div>
      </div>
       </fieldset>
      <div>
     <div className="col-md-2">
  
      <button className="btn btn-primary"  onClick={this.login.bind(this)} >login</button>
      </div>
      </div>
      </form>
   );
}
}

export default login;