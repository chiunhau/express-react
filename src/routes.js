var React = require('react');
var Router = require('react-router');
var Route = Router.Route;	
var RouteHandler = Router.RouteHandler;

var routes = (
	<Route path="/" handler={App}>
		<Route path="login" handler={Login} />
		<Route path="about" handler={About} />
	</Route>
);