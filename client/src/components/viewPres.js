import React, { Component } from 'react';
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/sidebar_issue";
import Prescriptions from './Prescriptions';
import axios from "axios";


class viewPres extends Component {

  render() {
    return (
        <div className="ViewPres">
         <Navbar />
            
                <div className="row">
                
                    <div className="col-md-3">
                    {/*binding the functions to Sidebar tag*/}
                    <Sidebar/>
                    <div className="profile-img"><img src={require('../img/pres2.jpg')} alt=""/></div>
                    </div>
                    <div className="col-md-8">
                    <h2>Prescriptions</h2><br></br>
                    <Prescriptions/>
                    
                    
                    </div>
                    
                    
                </div>
            
        </div>
    );

  }
}

export default viewPres;
