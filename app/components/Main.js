// Include React
var React = require("react");

// sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// Helper Functions
var helpers = require('./utils/helpers.js');

var Main = React.createClass({

  // Set the default state
  getInitialState: function() {
    return { searchData: {}, results: [], saved: [] };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(prevState.searchData !== this.state.searchData) {
      console.log("Did update");
      console.log(this.state.searchData);

      helpers.runNYTQuery(this.state.searchData)
      .then(function(data){
        if (data !== this.state.results) {
          console.log("here");
          this.setState({ results: data })
        }
      }.bind(this));
    }
  },

  setData: function(searchData) {
    this.setState({ searchData: searchData });
  },

  saveArticle: function(event) {
    console.log(event.target.id);

    var articles = this.state.results.filter(result => result._id !== event.target.id);
    var saved = this.state.results.filter(result => result._id === event.target.id);

    var newSavedState = [
      ...this.state.saved,
      saved[0]
    ];

    console.log(newSavedState);

    this.setState({ results: articles });
    this.setState({ saved: newSavedState });
  },

  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2 className="text-center">NYT Article Search</h2>
            <p className="text-center">
              <em>Enter the information below to search for an article.</em>
              <a href="#/search"><button className="btn btn-default">Info</button></a>
            </p>
          </div>

        </div>

        <div className="row">

          <div className="col-md-6 col-md-offset-3">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
              </div>
              <div className="panel-body">
                <Search setData={this.setData} />
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 col-md-offset-3">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Results</h3>
              </div>
              <div className="panel-body">
                <Results
                  articles={this.state.results}
                  saveArticle={this.saveArticle}
                />
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 col-md-offset-3">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Saved</h3>
              </div>
              <div className="panel-body">
                <Saved saved={this.state.saved}/>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Main;
