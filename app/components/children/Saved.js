// Require react
var React = require("react");

// New component
var Saved = React.createClass({

  mapSaved: function(saved) {
    console.log(saved);
    return (
      <div className="article-box">
        <p>{saved.headline.main}
          <span className="inline-button"><button>Read</button></span>
          <span className="inline-button"><button id={saved._id} onClick={this.props.saveArticle}>Save</button></span>
        </p>
      </div>
    )
  },

  render: function() {
    return (
      <div>{ this.props.saved.map(this.mapSaved) }</div>
    );
  }
});

module.exports = Saved;
