import React, { Component } from 'react';

class SearchEmp extends Component{

    getItem(e){
        e.preventDefault();
        const id=this.refs.emptype.value;
        const update = this.props;
        var data={"id":id};
        console.log(data.type);
        fetch('http://localhost:8080/emp/'+data.id,{
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{
            update.updateState(data);
        }).catch(err=>{
            alert(err);
        })

    }
render(){
 return(
 <form className="form-horizontal">
    <fieldset>
     <div className="form-group">
        <div className="col-lg-10">

            <input type="text" className="form-control" id="inputType"  ref="emptype"/>
        </div>
      </div>
      
      <div className="col-md-2">

      <button className="btn btn-secondary" onClick={this.getItem.bind(this)}>search</button><br></br>
      </div>
    </fieldset>
     </form>
  );
}
}

export default SearchEmp;