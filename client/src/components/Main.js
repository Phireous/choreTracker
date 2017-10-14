// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";
import Auth from "../modules/Auth";
import Login from "./Login";



// Create the Main component
class Main extends Component {

  state = {
    username: ""
  }

  handleLogout =(event) => {
    event.preventDefault();
    Auth.deauthenticateUser();
    window.location.href="/";
  }

  setParent = (name) => {
    this.setState({
      username: name
    })
  }


  getUsername = () => {
    return (this.state.username);
  }
  

  render() {
    
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
    
        {Auth.isUserAuthenticated() ? (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav">
            <Link to="/Search"><button className="btn btn-success btn-md navbar-btn">Pick up a chore</button></Link>
            <Link to="/Post"><button className="btn btn-danger btn-md navbar-btn">Post a chore</button></Link>
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <p className="navbar-text">Signed in as {this.getUsername()}</p>
              <button type="button" className="btn btn-default navbar-btn" onClick={this.handleLogout}>Logout</button>
          </ul>
          </div>
           ) : (
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
              <Link to="/Register"><button type="button" className="btn btn-warning navbar-btn">Sign Up</button></Link>
              <Link to="/Login"><button type="button" className="btn btn-default navbar-btn">Login</button></Link>
          </ul>          
        </div>
        )}
      </div>
    </nav>

      <div className="row">
        {Auth.isUserAuthenticated() ? (
        
          this.props.children
        ) : (
          <div>
            <div className="jumbotron">
              <h1>Welcome to Chore Tracker!</h1>
              <p>Not looking forward to mowing the lawn? How about that car wash you have been putting off for far too long? Why not have someone else do it?</p>
              <p>Here at Chore Tracker you can pass off that errand to someone else! Interested in making a few bucks? Pick up someone else's chore!</p>
              <Link to="/Register"><button type="button" className="btn btn-warning navbar-btn">Sign Up</button></Link>
            </div>
            <Login setParent={this.setParent.bind(this)} />
          </div>
        )}
      </div>

    </div>
    );
  }
};

// Export the module back to the route
export default Main;