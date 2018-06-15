import React, { Component } from 'react';
import Search from './components/search';
import SearchList from './components/presList';
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/sidebar_issue";
import Footer from "./components/Layout/Footer";

class Issue extends Component {

  constructor(props){
    super(props);
    this.state= {
        results: {},
        Pid:this.props.Pid,
        Patient_name:this.props.Patient_name,
        Pres_Id:this.props.Pres_Id,
        Create_Date:this.props.Create_Date,
        Drug_type1:this.props.Drug_type1,
        Drug_type2:this.props.Drug_type2,
        Dosage:this.props.Dosage,
        Frequency:this.props.Frequency,
        Period:this.props.Period,
        
     }
}


  updateState(pres_items){
    this.setState({
        results:pres_items
        
    })
    
}



  render() {
    return (
        <div className="Issue">
        
         <Navbar />
            
                <div className="row">
                
                    <div className="col-md-3">
                    {/*binding the functions to Sidebar tag*/}
                    <Sidebar/>
                    <div className="profile-img"><img src={require('./img/drug1.jpg')} alt=""/></div>
                    </div>
                    <div className="col-md-8">
                    {/*binding the functions in search tag*/}
                    <Search callUpdate ={this.updateState.bind(this)}/>
                    <br></br>
                    <SearchList presResults={this.state.results}/>
                    {/*binding the functions in Resultlist tag*/}
                    </div>
                    
                    
                </div>
                
            <Footer/>
        </div>
    );

  }
}

export default Issue;
