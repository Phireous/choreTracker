// Include the Axios library for HTTP requests
import axios from "axios";

// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
const helpers = {

  // This will return any saved articles from our database

  saveUser: function(username, password) {
    var newUser = { username: username, password: password };

    return axios.post("/api/users", newUser)
      .then(function(response) {
        console.log("New User Saved", response.data._id);
          return response.data._id;
      });
  },
  findUser: function(username, password) {
    var user = { username: username, password: password };
    return axios.get("/api/login", user)
  },
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    console.log('postSaved', title)
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // Update post
  accept: function(item) {

    return axios.post("/accept/" + item)
    .then(function(results) {
      console.log("axios results", results);
      return results;
    })
  },
  // Update post
  reject: function(item) {
      
    return axios.post("/reject/" + item)
    .then(function(results) {
      console.log("axios results", results);
      return results;
    })
  },
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
export default helpers;