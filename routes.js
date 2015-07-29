var React = require('react');
var Router = require('react-router');
var App = require('./src/jsx/App.jsx');
var About = require('./src/jsx/About.jsx');
var Route = Router.Route;

var routes = (
	<Route handler={App} path="/">
		<Route path="about" handler={About}>
	</Route>
);

module.exports = routes;