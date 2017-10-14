// Include React as a dependency
import React, { Component } from 'react'

// Include the Helper (for the saved recall)
import helpers from "../utils/helpers";

// Create the Search component
class Search extends Component {

  state = {
    availableChores: []
  }

  // When this component mounts, get all saved articles from our db
  componentWillMount() {
    helpers.getSaved()
    .then((choreData) => {
      this.setState({ availableChores: choreData.data });
      console.log("saved results", choreData.data);
    });
  }

  // This code handles the updating saved chores from our database
  acceptChore = (item) => {
    helpers.accept(item)
    .then(() => {

      // Get the revised list!
      helpers.getSaved()
      .then((choreData) => {
        this.setState({ availableChores: choreData.data });
        console.log("saved results", choreData.data);
      });

    });
  }

  rejectChore = (item) => {
    helpers.reject(item)
    .then(() => {

      // Get the revised list!
      helpers.getSaved()
      .then((choreData) => {
        this.setState({ availableChores: choreData.data });
        console.log("saved results", choreData.data);
      });

    });
  }

  // A helper method for mapping through our articles and outputting some HTML
  renderChores = () => {
    return this.state.availableChores.map((chore, index) => {
      if (chore.inProgress === false) {
        return (
          <div key={index}>
            <div className="col-lg-4">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">{chore.title}</h3>
                </div>
                <div className="panel-body">
                  <p>{chore.description}</p>
                  <p>${chore.price}</p>
                  <button className="btn btn-success" onClick={() => this.acceptChore(chore._id)}>I'll do it!</button>
                </div>

              </div>
            </div>
          </div>
        );
      } else {
        return (null);
      }
    });  
  }

  renderChoresInProgress = () => {
    return this.state.availableChores.map((chore, index) => {
      if (chore.inProgress === true && chore.completed === false) {
        return (
          <div key={index}>
            <div className="col-lg-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">{chore.title}</h3>
                </div>
                <div className="panel-body">
                  <p>{chore.description}</p>
                  <p>${chore.price}</p>
                  <button className="btn btn-primary" onClick={() => this.rejectChore(chore._id)}>Changed my mind</button>
                </div>

              </div>
            </div>
          </div>
        );
      }
      else {
        return (null);
      } 
    });
  }

  renderNoChores = () => {
    return (
      <div className="col-lg-12">
        <p>Currently no chores in progress</p>
      </div>
    )
  }

  // A helper method for rendering a container and all of our artiles inside
  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    Find a chore to do!</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group-chores">
                  {this.renderChores()}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    Chores to do</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group-inProgress" id="inprogress">
                  {
                    this.renderChoresInProgress()
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContainer();
  }
};

// Export the module back to the route
export default Search;