// Require react
var React = require("react");

// New component
var Form = React.createClass({

  // Initial state with pieces of data to be sent to API
  getInitialState: function() {
    return {  topic: "", startYear: "", endYear: "" };
  },

  // Responding to user input
  handleTopic: function(event) {
    this.setState({ topic: event.target.value });
  },

  handleStartYear: function(event) {
    this.setState({ startYear: event.target.value });
  },

  handleEndYear: function(event) {
    this.setState({ endYear: event.target.value });
  },

  // Responding to user submits
  handleSubmit: function(event) {
    event.preventDefault();

    var searchData = {
      topic: this.state.topic,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    }

    console.log(searchData);

    this.props.setData(searchData);

    this.setState({ topic: "", startYear: "", endYear: "" });
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h4>Topic</h4>
          <input
            value={this.state.topic}
            type="text"
            className="form-control text-center"
            id="topic"
            onChange={this.handleTopic}
            required
          />
          <br />
          <h4>Start Year</h4>
          <input
            value={this.state.startYear}
            type="text"
            className="form-control text-center"
            id="startYear"
            onChange={this.handleStartYear}
            required
          />
          <br />
          <h4>End Year</h4>
          <input
            value={this.state.endYear}
            type="text"
            className="form-control text-center"
            id="endYear"
            onChange={this.handleEndYear}
            required
          />
          <br />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
});

module.exports = Form;
