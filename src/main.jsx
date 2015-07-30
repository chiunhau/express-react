var React = require('react');
var ReactApp = require('./components/App.jsx');
var Router = require('react-router');
var routes = require('./routes.jsx');



function AppRuner() {
	Router.run(routes, Router.HistoryLocation, function(Handler, state) {
	  React.render(<Handler/>, document.body);
	});
}

module.exports = AppRuner();

AppRuner();