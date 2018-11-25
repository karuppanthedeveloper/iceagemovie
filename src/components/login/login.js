import React, {Component} from "react";
import axios from "axios";
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import {Pagination} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageHolder from '../imgHolder/imageHolder';
class Login extends Component{
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

        if(typeof fields["password"] !== "undefined"){
           if(!fields["password"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["password"] = "Only letters";
           }        
        }

        if(typeof fields["name"] !== "undefined"  && fields["name"].indexOf('@')>-1){
           let lastAtPos = fields["name"].lastIndexOf('@');
           let lastDotPos = fields["name"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["name"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["name"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["name"] = "Email is not valid";
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
			
    <div className="col-sm-6 logcontainer col-md-offset-1">
	   <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
	<p className="headertxt">SIGN IN </p>
	  <div className="fieldcontainer">
			<div>Email or Username</div>
			<div>
				<input type="text" className={this.state.errors["name"] ? "invalid" : ""} onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
				<div className="error">{this.state.errors["name"]}</div>
			</div>
			<div>Password</div>
			<div>
				<input type="password" className={this.state.errors["password"] ? "invalid" : ""}  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
				<div className="error">{this.state.errors["password"]}</div>
			</div>
			<button  id="signin" value="Submit">Sign In</button>
			<div className="linkholder">
				<Link to='/forgot'>Forgot password ?</Link> |  <Link to='/register'><a href="#"className="fplink" id="newusercreate">Create an account</a></Link>
			</div>
		</div>
			</form>
	</div>
     <ImageHolder/>
    </div>
	
        )
    };
}
export default Login;