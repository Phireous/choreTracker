import React, { Component } from "react";
import helpers from "../utils/helpers";
import Auth from "../modules/Auth";
import { Redirect } from "react-router";

var style = {
  backgroundColor: "white",
  padding: "20px",
  outlineColor: "black",
  outlineStyle: "solid"
};

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

  componentDidMount() {
    document.body.style.backgroundImage="../images/lawn";
  }

 render () {
   return (

<<<<<<< HEAD
     <div className="container">
      
=======
     <div className="container" style={ style }>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/"><p className="navbar-brand">Chore Tracker</p></Link>  
            </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <Link to="/Register"><p type="button" className="btn btn-default navbar-btn">Sign Up</p></Link>
              </ul>          
            </div>

          </div>
        </nav>
>>>>>>> 6bbb46cc722c4f4ddf929ad671eeac4e38f6b29d

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