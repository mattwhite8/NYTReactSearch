// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./components/config/routes");

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(routes, document.getElementById("app"));
