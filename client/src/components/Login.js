import React, { Component } from "react";

class Form extends Component {
 render () {
   return (
     <form className="Form">
       <h2>Sign up</h2>
       <div className="form-group">
         <label htmlFor="username">Username</label>
         <input type="text" className="form-control"
           name="username" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control"
           name="password" />
       </div>
       <button type="submit" className="btn btn-primary">
          Login
       </button>
     </form>
   )
 }
}
export default Form;