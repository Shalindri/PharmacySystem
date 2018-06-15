import React, { Component } from 'react';
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/sidebar_issue";
import Footer from "./Layout/Footer";
import DrugStock from './drugStock';
import axios from "axios";



class viewDrugs extends Component {

  render() {
    return (
        <div className="Issue">
         <Navbar />
            
                <div className="row">
                
                    <div className="col-md-3">
                    {/*binding the functions to Sidebar tag*/}
                    <Sidebar/>
                    <div className="profile-img"><img src={require('../img/drug2.jpg')} alt=""/></div>
                    </div>
                    <div className="col-md-8">
                    <h2>Available Drug Stock</h2><br></br>
                    <DrugStock/>
                    
                    </div>
                    
                    
                </div>
                <Footer/>
            
        </div>
    );

  }
}

export default viewDrugs;
