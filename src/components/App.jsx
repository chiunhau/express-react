var React = require('react');
var Router = require('react-router');
var Route = Router.Route;	
var RouteHandler = Router.RouteHandler;


var Navbar = require('./Navbar.jsx');
var About = require('./About.jsx');
var Login = require('./Login.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
});


module.exports = App;




Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler/>, document.body);
});