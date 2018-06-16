import React, { Component } from 'react';
//import Navbar from "./Layout/Navbar";
//import Sidebar from "./Layout/sidebar_issue";
import DrugStock from './drugStock';
import axios from "axios";



class viewDrugs extends Component {

  render() {
    return (
        <div className="Issue">
         
            
                <div className="row">
                
                    
                    <div className="col-md-8">
                    <h2>Available Drug Stock</h2><br></br>
                    <DrugStock/>
                    
                    </div>
                    
                    
                </div>
            
        </div>
    );

  }
}

export default viewDrugs;
