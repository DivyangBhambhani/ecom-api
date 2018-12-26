var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');
var OurProducts = require('./OurProducts');
var loadjs = require('loadjs');

class Home extends React.Component {
	componentDidMount() {
		loadjs('js/main.js', function() {});
	}
	render() {
		return(
			<div>
				<Header />
				<div id="content" className="site-content">
					<div className="section slideshow">
						<div className="container">
							<div className="tiva-slideshow-wrapper">
								<div id="tiva-slideshow" className="nivoSlider">
									<Link to="#">
										<img className="img-responsive" src="img/slideshow/home4-slideshow-1.jpg" alt="Slideshow Image" />
									</Link>
									<Link to="#">
										<img className="img-responsive" src="img/slideshow/home4-slideshow-2.jpg" alt="Slideshow Image" />
									</Link>
									<Link to="#">
										<img className="img-responsive" src="img/slideshow/home4-slideshow-3.jpg" alt="Slideshow Image" />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="section payment-intro">
						<div className="container">
							<div className="payment-wrap">
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="item d-flex">
											<div className="item-left">
												<img src="img/home1-payment-1.png" alt="Payment Intro" />
											</div>
											<div className="item-right">
												<h3 className="title">Free Shipping item</h3>
												<div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
											</div>
										</div>
									</div>
									
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="item d-flex">
											<div className="item-left">
												<img src="img/home1-payment-2.png" alt="Payment Intro" />
											</div>	
											<div className="item-right">
												<h3 className="title">Secured Payment</h3>
												<div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
											</div>
										</div>
									</div>
									
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="item d-flex">
											<div className="item-left">
												<img src="img/home1-payment-3.png" alt="Payment Intro" />
											</div>
											<div className="item-right">
												<h3 className="title">Money Back Guarantee</h3>
												<div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
											</div>
										</div>
									</div>
									
									<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
										<div className="item d-flex">
											<div className="item-left">
												<img src="img/home1-payment-4.png" alt="Payment Intro" />
											</div>
											<div className="item-right">
												<h3 className="title">Express Shipping</h3>
												<div className="content">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<OurProducts />

					<div className="section intro">
						<div className="block-content">
							<div className="container">
								<div className="intro-wrap">
									<div className="row">
										<div className="col-lg-12 col-md-12 text-center">							
											<div className="intro-header">
												<h3>Why Choose Us</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
											</div>
											<div className="intro-social">
												<ul>
													<li><Link to="#"><img src="img/intro-social-1.png" alt="Social Item" /></Link></li>
													<li><Link to="#"><img src="img/intro-social-2.png" alt="Social Item" /></Link></li>
													<li><Link to="#"><img src="img/intro-social-3.png" alt="Social Item" /></Link></li>
													<li><Link to="#"><img src="img/intro-social-4.png" alt="Social Item" /></Link></li>
												</ul>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-6 top-left text-center">
											<div className="intro-item">
												<p><img src="img/intro-icon-1.png" alt="Intro Image" /></p>
												<h4>Always Fresh</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-6 top-right text-center">
											<div className="intro-item">
												<p><img src="img/intro-icon-2.png" alt="Intro Image" /></p>
												<h4>100% Natural</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
										
										<div className="col-lg-6 col-md-6 col-sm-6 bottom-left text-center">
											<div className="intro-item">
												<p><img src="img/intro-icon-3.png" alt="Intro Image" /></p>
												<h4>Super Healthy</h4>
												<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
																		
										<div className="col-lg-6 col-md-6 col-sm-6 bottom-right text-center">
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

module.exports = Home;

