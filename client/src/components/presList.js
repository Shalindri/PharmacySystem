import React,{Component} from 'react';
import '../App.css';
//import './presList.css';
//import Alert from './alert';
//import ReactDOM from 'react-dom';

class presList extends Component{

    ava(e){
        e.preventDefault();
        console.log(this.props.presResults.data);
        this.props.presResults.data.map(Pid=>{
            const Drug_type1=Pid.Drug_type1;
           // const update = this.props;
            var data={"Drug":Drug_type1};
            console.log(data.Drug);
            fetch('http://localhost:8080/drug/'+data.Drug,{
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
           if(data.length===0){
               console.log("Not found");
           }
           else{
               alert("Available");
               
               //ReactDOM.render(<Alert />, document.getElementById('root'));   
           }
        }).catch(err=>{
            alert(err);
        })
     
        })        
    }

    insertDrugs(){
       // e.preventDefault();
        const Quantity1=this.refs.qty1.value;
        const Quantity2=this.refs.qty2.value;
        
        this.props.presResults.data.map(Pid=>{
            const Drug_name1=Pid.Drug_type1;
            const Drug_name2=Pid.Drug_type2;
            const Pres_Id=Pid.Pres_Id;
            var data={"Quantity1":Quantity1,"Quantity2":Quantity2,"Drug_name1":Drug_name1,"Drug_name2":Drug_name2,"Pres_Id":Pres_Id};
            fetch('http://localhost:8080/issueddrugs/',{
                method: 'POST',
                body:JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Issued Successfully');
            }).catch(err => {
                alert("Error "+err);
            })
        })

    }



    

    

    
    render(){
        var count=0;
        if(this.props.presResults.data!==undefined){
            var presList=this.props.presResults.data.map(Pid=>{
                count=count+1;
                //this.props.Drug_type1=Pid.Drug_type1;
                //console.log(drug);
            
               // var Drug_type1=Pid.Drug_type1;

                return (
                    /*
                     *Displays the searched food name, price and the user can input the quantity
                     */
                    <div className="row list" key={Pid._id}>
                        <div className="col-md-8">
                        <div className="jumbotron">
                        
                        <h6>Patient ID      : {Pid.Pid}</h6>
                        <h6>Patient Name    : {Pid.Patient_name}</h6>
                        <h6>Prescription ID : {Pid.Pres_Id}</h6>
                        <h6>Create Date     : {Pid.Create_Date}</h6>
                        <hr className="my-3"></hr>
                        <h6>Drugs Assigned  : 

                        <ul className="list-group"><h6>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                         {Pid.Drug_type1}
                         
                        <span><div className="inline fields">
                            
                            <input className="form-control" ref="qty1"/>
                            <button type="button" className="btn btn-primary" onClick={this.ava.bind(this)}>Check</button></div>    
                        </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        {Pid.Drug_type2}
                        <span><input className="form-control" ref="qty2"/>
                            <button type="button" className="btn btn-primary">Check</button></span>
                        </li></h6>
                        </ul>
                        </h6>
                        <h6>Dosage          : {Pid.Dosage}</h6>
                        <h6>Frequency       : {Pid.Frequency}</h6>
                        <h6>Period          : {Pid.Period}</h6>
                        <hr className="my-3"></hr>
                    
                        <div className="profile-teaser-right">
                        <button type="button" className="btn btn-primary" onClick={()=>{this.insertDrugs()}}>Dispense</button></div>
                        </div>
                        </div>
                    </div>
                )
            })

            /*
             * If the item searched is not found it will display an error
             */
            if(count===0){
                return (
                    <div className="col-md-5">
                        <h5>Prescription not found</h5>
                    </div>
                )
            }
        }

        return(
            <ul>
                {presList}
            </ul>

        )
}
}

export default presList;