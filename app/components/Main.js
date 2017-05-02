// Include React
var React = require("react");

// Helper Functions
var helpers = require('./utils/helpers.js');

var Main = React.createClass({

  // Set the default state
  getInitialState: () => {
    return { searchData: {}, results: {} };
  },

  componentDidUpdate: (prevProps, prevState) => {
    if(prevState.searchData !== this.state.searchData) {
      console.log("Did update");

      helpers.runNYTQuery(this.state.searchData).then((data) => {
        if (data !== this.state.results) {
          console.log("here");
          console.log(data);
        }
      }.bind(this));
    }
  },

  setData: (searchData) => {
    this.setState({ searchData: searchData });
  },

  render: () => {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2 className="text-center">NYT Article Search</h2>
            <p className="text-center">
              <em>Enter the information below to search for an article.</em>
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
                <Form setData={this.setData} />
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 col-md-offset-3">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
});

module.exports = Main;
