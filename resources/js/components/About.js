var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');

class About extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<div id="content" className="site-content">
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">About Us</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><span>About Us</span></li>
							</ul>
						</div>
					</div>
					<div className="container">
						<div className="about-us intro">
							<div className="container">
								<div className="row">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<div className="intro-header">
											<h3>Welcome To FreshMart</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
										</div>
									</div>
									
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="intro-left">
											<div className="intro-item">
												<p><img src="img/intro-icon-1.png" alt="Intro Image" /></p>
												<h4>Always Fresh</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
											
											<div className="intro-item">
												<p><img src="img/intro-icon-3.png" alt="Intro Image" /></p>
												<h4>Super Healthy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>
									
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="pb60 effect">
											<Link to="#">
												<img className="img-responsive" style={{display: 'inherit'}} src="img/intro-1.png" alt="Intro Image" />
											</Link>
										</div>
									</div>
									
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="intro-right">
											<div className="intro-item">
												<p><img src="img/intro-icon-2.png" alt="Intro Image" /></p>
												<h4>100% Natural</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
											
											<div className="intro-item">
												<p><img src="img/intro-icon-4.png" alt="Intro Image" /></p>
												<h4>Premium Quality</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

module.exports = About;