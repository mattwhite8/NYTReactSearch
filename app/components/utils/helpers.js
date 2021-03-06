// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var NYTAPI = "308ba9427a854a0494560108799d1959";

// Helper functions
var helpers = {

  runNYTQuery: (data) => {

    var NYTURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    NYTURL += "?q=" + data.topic;
    NYTURL += "&begin_date=" + data.startYear;
    NYTURL += "&end_date=" + data.endYear;
    NYTURL += "&api-key=" + NYTAPI;

    return axios.get(NYTURL).then(function(response){
      console.log("response");
      console.log(response.data.response.docs.slice(0,5));
      return response.data.response.docs.slice(0,5);
    });

  }

};

module.exports = helpers;
