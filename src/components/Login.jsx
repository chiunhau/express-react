var React = require('react');
var Parse = require('parse').Parse;
var Login = React.createClass({
  render: function () {
    return(
    	<div className="login col-md-4 col-md-offset-4">
        <button id="fb-signin" className="btn btn-lg btn-primary btn-block">Sign in with Facebook</button>
    	</div>
    )
  }
});

module.exports = Login;