import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import {Pagination} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageHolder from '../imgHolder/imageHolder';
class Register extends Component{
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
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
		//Name
        if(!fields["password"]){
           formIsValid = false;
           errors["password"] = "Cannot be empty";
        }
		  if(!fields["cpassword"]){
           formIsValid = false;
           errors["cpassword"] = "Cannot be empty";
        }
  if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
        if(typeof fields["password"] !== "undefined"){
           if(!fields["password"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["password"] = "Only letters";
           }        
        }

        if(typeof fields["email"] !== "undefined" ){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  
	   
	    if(typeof fields["password"] !== "undefined" && typeof fields["cpassword"] !== "undefined" && fields["cpassword"] !== fields["password"] ){
              formIsValid = false;
              errors["cpassword"] = "Confirm password not mathcing";
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
			<div className="col-sm-6 logcontainer col-md-offset-1">
			<p className="headertxt">SIGN UP</p>
				<form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
						<div id="newuser">
							<div>Name</div>
							<div><input type="text" className={this.state.errors["name"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
							<div className="error">{this.state.errors["name"]}</div>
							</div>
							<div>Email</div>
							<div><input type="text" className={this.state.errors["email"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
							<div className="error">{this.state.errors["email"]}</div>
							</div>
							<div>Password</div>
							<div><input type="password" className={this.state.errors["password"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
							<div className="error">{this.state.errors["password"]}</div>
							</div>
							<div>Confirm Password</div>
							<div><input type="password" className={this.state.errors["cpassword"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "cpassword")} value={this.state.fields["cpassword"]}/>
							<div className="error">{this.state.errors["cpassword"]}</div>
							</div>
							<button  id="signin" value="Submit">Sign Up</button>
							<div className="linkdiv"><Link to='/login'><a href="#"className="fplink" id="forgotcancel">Cancel</a></Link></div>
						</div>
			</form>
		</div>
		<ImageHolder/>
				</div>
        )
    };
}
export default Register;