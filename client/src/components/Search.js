// Include React as a dependency
import React, { Component } from 'react'

// Create the Search component
class Search extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Find a chore to do!</h3>
            </div>
            <div className="panel-body">
              <p>list out chores here</p>
             
            </div>

          </div>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default Search;