// Include React as a dependency
import React, { Component } from 'react'

import helpers from "../utils/helpers";

// Create the Post component
class Post extends Component {

  state = {
    title: "",
    description: "",
    price: 0
  }

  handleChange = (event) => {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title, this.state.description, this.state.price)
    helpers.postSaved(this.state);
  }
  
  render() {
    return (
      <div className="container">
        <div className="col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Post a chore you don't want to do!</h3>
            </div>
            <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <h4 className=""><strong>Title</strong></h4>
                <input
                  type="text"
                  value={this.state.title}
                  className="form-control"
                  id="title"
                  onChange={this.handleChange}
                  required
                />

                <h4><strong>Description</strong></h4>
                <input
                  type="text"
                  value={this.state.discription}
                  className="form-control"
                  id="description"
                  onChange={this.handleChange}
                  required
                />

                <h4><strong>Price</strong></h4>

                <input
                  type="text"
                  value={this.state.price}
                  className="form-control"
                  id="price"
                  onChange={this.handleChange}
                  required
                />

              </div>
              <div className="pull-right">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.handleSubmit}
                >
                  <h4>Submit</h4>
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Chores you have Posted</h3>
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
