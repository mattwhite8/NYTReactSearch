// Require react
var React = require("react");

// New component
var Results = React.createClass({

  mapArticles: function(article) {
    console.log(article);
    return (
      <div className="article-box">
        <p>{article.headline.main}
          <span className="inline-button"><button>Read</button></span>
          <span className="inline-button"><button id={article._id} onClick={this.props.saveArticle}>Save</button></span>
        </p>
      </div>
    )
  },

  render: function() {
    return (
      <div>{ this.props.articles.map(this.mapArticles) }</div>
    );
  }
});

module.exports = Results;
