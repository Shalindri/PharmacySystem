import React, { Component } from 'react';
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/sidebar_issue";


class viewDrugs extends Component {

  constructor(props){
    super(props);
    this.state= {
        results: {},
     }
}


  render() {
    return (
        <div className="Issue">
         <Navbar />
            
                <div className="row">
                
                    <div className="col-md-3">
                    {/*binding the functions to Sidebar tag*/}
                    <Sidebar/>
                    </div>
                    <div className="col-md-8">
                    
                    </div>
                    
                    
                </div>
            
        </div>
    );

  }
}

export default viewDrugs;
