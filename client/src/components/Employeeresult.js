import React, { Component } from 'react';
import  Register from './registerEmp';

import ReactDOM from 'react-dom';
//import { Types } from 'mongoose';


class ResultEmp extends Component{

Add=()=>{
    ReactDOM.render(<Register/>,document.getElementById('root'));
}



render(){
   
    var count=0;
    
    if(this.props.employee.data!=undefined){
        var employeeList=this.props.employee.data.map(Type=>{
            count=count+1;

 return(

            <div>
                    <div className="row list" key={Type._id}>
                        <div className="col-md-5">
                            
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Employee Id</th>
                    <th scope="col">Employee type</th>
                    <th scope="col">Employee name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Telephone</th>
                    </tr>
                </thead>
                <tbody>
                        
                    <tr className="table-active">
                   
                    <td>{Type.Emp_Id}</td>
                    <td>{Type.Type}</td>
                    <td>{Type.Emp_name}</td>
                    <td>{Type.Email}</td>
                    <td>{Type.Address}</td>
                    <td>{Type.Telephone}</td>
           
                    </tr>
                    
                    </tbody>
                </table> 
                        </div>
                    </div></div>
                )
            })

            if(count==0){
                return (
                    <div className="col-md-5">
                        <h5>Employee not found</h5>
                    </div>
                )
            }
        }

        return(
            <ul>
                {employeeList}
            </ul>
            
        )
    }

}

export default ResultEmp;