var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

console.log("hrello");
var Navbar = require('./Navbar.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Navbar />
        APP
        <div className="container">
        </div>
      </div>
    );
  }
});


module.exports = App;