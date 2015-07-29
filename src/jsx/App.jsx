var React = require('react');
var Router = require('react-router');
var Route = Router.Route;	
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>Welcome to the App</h1>
        <RouteHandler />
      </div>
    );
  }
});

