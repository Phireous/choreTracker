// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";

// Create the Main component
class Main extends Component {

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
          <a className="navbar-brand" href="#">Chore Tracker</a>
        </div>
    
        
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <Link to="/Search"><button className="btn btn-primary btn-md navbar-btn">Pick up a chore</button></Link>   
            <Link to="/Post"><button className="btn btn-danger btn-md navbar-btn">Post a chore</button></Link>
          </ul>
          
          <ul className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-default navbar-btn">Sign Up</button>
          </ul>
        </div>
      </div>
    </nav>

      <div className="row">

        {/* This code will dump the correct Child Component */}
        {this.props.children}

      </div>

    </div>
    );
  }
};

// Export the module back to the route
export default Main;