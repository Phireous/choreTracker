import React, { Component } from "react";
import { Link } from "react-router";
import helpers from "../utils/helpers";

class Form extends Component {

constructor(props) {

  super(props);

this.state = {
  user: {
  username: "",
  password: ""
    }
  };
  this.changeUser = this.changeUser.bind(this);
}
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
    event.preventDefault();
    helpers.findUser({
      username: this.state.username,
      password: this.state.password
    })
  }

 render () {
   return (
     <div className="container">
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
          onSubmit={this.handleSubmit}>
            Login
        </p>
      </form>
     </div>
   )
 }
}
export default Form;