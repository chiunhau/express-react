var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navbar = require('./Navbar.jsx');

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