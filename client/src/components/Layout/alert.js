import React,{Component} from 'react';
import '../App.css';

class alert extends Component{

    render(){
        
        return(
            <div className="col-md-4">
            <div className="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
            </div>
            </div>
        )
    }
}

export default alert;