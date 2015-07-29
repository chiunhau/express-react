var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function() {
  	return (
			<div className="about">
				<h1>About</h1>
			</div>
  	);
  }
});

module.exports = About;