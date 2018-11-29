var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');
var OurProducts = require('./OurProducts');

class Home extends React.Component {
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
				</div>
				<Footer />
			</div>
		)
	}
}

module.exports = Home;

