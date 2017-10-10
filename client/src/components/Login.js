import React, { Component } from "react";
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
       <button type="submit" 
        className="btn btn-primary"
        onSubmit={this.changeUser}>
          Login
       </button>
     </form>
   )
 }
}
export default Form;