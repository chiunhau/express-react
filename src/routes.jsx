var React = require('react');
var Router = require('react-router');
var Route = Router.Route;	
var RouteHandler = Router.RouteHandler;

var App = require('./components/App.jsx');
var About = require('./components/About.jsx');
var Login = require('./components/Login.jsx');

var routes = (
	<Route path="/" handler={App}>
		<Route path="login" handler={Login} />
		<Route path="about" handler={About} />
	</Route>	
);

module.exports = routes;