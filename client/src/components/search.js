import React,{Component} from 'react';
import '../App.css';

class search extends Component{

    getItem(e){
        e.preventDefault();
        const Pid=this.refs.Pid.value;
        const update = this.props;
        var data={"Pid":Pid};
        console.log(data.Pid);
        fetch('http://localhost:8080/issue/'+data.Pid,{
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{
            update.callUpdate(data);
        }).catch(err=>{
            alert(err);
        })

    }


    render(){
        
        return(
            <form>

                <fieldset>
                    <div className="col-md-10">
                        <legend>View Prescriptions</legend>
                        <div className="form-group">
                            <input className="form-control" id="pid" aria-describedby="pid_help" placeholder="Enter Patient ID" ref="Pid"/>
                        </div>
                    </div>

                    <div className="col-md-10">
                        <button className="btn btn-secondary" onClick={this.getItem.bind(this)}>Search</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default search;