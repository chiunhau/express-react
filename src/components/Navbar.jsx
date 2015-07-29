var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">Focus</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<form className="navbar-form navbar-right">
							<a className="btn btn-success" href="login">Signup or Signin</a>
						</form>
					</div>
				</div>
			</nav>
    );
  }
});

module.exports = Navbar;