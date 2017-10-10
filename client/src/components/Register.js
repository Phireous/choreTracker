import React, { Component } from "react";
import helpers from "../utils/helpers";

class Form extends Component {

state = {
  username: "",
  password: ""
};

handleInputChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  helpers.saveUser({
    username: this.state.username,
    password: this.state.password
  }).then((resp) => {

    console.log(this.state);
    console.log("Account Saved");
    
  })

};

 render () {
   return (
     <form className="RegisterForm">
       <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="username">Username</label>
         <input type="text" 
                className="form-control"
                name="username"
                onChange={this.handleInputChange}
                required
               />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" 
                className="form-control"
                name="password"
                onChange={this.handleInputChange}
                required
               />
       </div>
       <button type="submit"
               className="btn btn-primary"
               onClick={this.handleSubmit}>
          Sign up
       </button>
     </form>
   )
 }
}
export default Form;