// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var NYTAPI = "308ba9427a854a0494560108799d1959";

// Helper functions
var helpers = {

  runNYTQuery: (data) => {
    console.log(data);
  }

};

module.exports = helpers;
