import React, { Component } from "react";
import helpers from "../utils/helpers";
import Auth from "../modules/Auth";
import { Redirect } from "react-router";

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

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.username);
    console.log(this.props.setParent());
    this.props.setParent(this.state.username);
    helpers.findUser({
      username: this.state.username,
      password: this.state.password
    })
    .then(function(userId) {
      Auth.authenticateUser(userId);
      return(<Redirect to="/"/>);
    })
  }

 render () {
   return (

     <div className="container">
      

      <form className="Form">
        <h2>Login</h2>
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
        <p type="submit" 
          className="btn btn-primary"
          onClick={this.handleSubmit}>
            Login
        </p>
      </form>
     </div>

   )
 }
}
export default Form;