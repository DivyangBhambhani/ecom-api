var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {
	render() {
		return(
			<div className="navbar navbar-inverse">
			  <div className="navbar-inner">
			    <ul className="nav">
			      <li className="active">
			      	<Link className="nav-link" to="/">Home </Link>
			      </li>
			      <li>
			      	<Link className="nav-link" to="/about">About</Link>
			      </li>
			    </ul>
			  </div>
			</div>
		)
	}
}

module.exports = Nav;