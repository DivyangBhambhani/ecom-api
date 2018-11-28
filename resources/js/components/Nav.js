var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {
	render() {
		return(
			<div>
				<nav className="navbar ">
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
					    <ul className="navbar-nav">
					      	<li className="nav-item active">
					        	<Link className="nav-link" to="/">Home </Link>
					      	</li>
					      	<li className="nav-item">
					        	<Link className="nav-link" to="/about">About</Link>
					      	</li>
					    </ul>
					    <div>
					    	Hello
					    </div>
					</div>  
				</nav>
			</div>
		)
	}
}

module.exports = Nav;