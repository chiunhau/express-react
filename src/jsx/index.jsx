var React = require('react');
var Router = require('react-router');
var Route = Router.Route;	
var RouteHandler = Router.RouteHandler;
// var Content = require('./Content.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>Appppp</h1>
        <RouteHandler />
      </div>
    );
  }
});

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Login = React.createClass({
  render: function () {
    return <h2>Login</h2>;
  }
});

var routes = (
	<Route path="/" handler={App}>
		<Route path="login" handler={Login} />
		<Route path="about" handler={About} />
	</Route>
);



Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler/>, document.body);
});