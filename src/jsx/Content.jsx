var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Content = React.createClass({
  render: function() {
  	return (
			<div className="content">
				<h1>Hellllo Worlddd!!!~~~zzzz</h1>
				<RouteHandler />
			</div>
  	);
  }
});

module.exports = Content;