// Include React as a dependency
import React, { Component } from 'react'

// Create the Post component
class Post extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Post a chore you don't want to do!</h3>
            </div>
            <div className="panel-body">
              I'm child 2!
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the module back to the route
export default Post;
