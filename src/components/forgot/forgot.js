import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import {Pagination} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageHolder from '../imgHolder/imageHolder';
class Forgot extends Component{
       constructor(props){
        super(props);
        this.state = {
           fields: {},
           errors: {}
       }
    };
	
	contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           //alert("Form has errors.")
        }

    }
	handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

		console.log(fields["name"]);
        //Name
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
        if(typeof fields["email"] !== "undefined"  && fields["email"].indexOf('@')>-1){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }
	handleChange(field, e){      
        let fields = this.state.fields;
	
	    fields[field] = e.target.value;        
        this.setState({fields});
    }
    render(){
        return(
         <div className="fluidcontainer">
			<form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
			<div className="col-sm-6 logcontainer col-md-offset-1">
			<p className="headertxt">Forgot your password ? </p>
				<div id="forgotpassword">
			<div>Email</div>
			<div><input type="text"className={this.state.errors["email"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
			<div className="error">{this.state.errors["email"]}</div></div>
			<button  id="signin" value="Submit">Submit</button>
			<div className="linkdiv"><Link to='/login'><a href="#"className="fplink" id="forgotcancel">Cancel</a></Link></div>
			</div>
			</div>
			</form>
			<ImageHolder/>
		</div>
        )
    };
}
export default Forgot;