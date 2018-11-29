var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class Footer extends React.Component {
	render() {
		return(
			<footer id="footer">
				<div className="footer">
					<div className="footer-wrap">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-col">
									<div className="block newsletter">
										<h2 className="block-title">Newsletter</h2>
										
										<div className="block-content">
											<p className="description">Sign up for newsletter to receive special offers and exclusive news about FreshMart products</p>
											<form>
												<input type="text" placeholder="Enter Your Email" />
												<button type="submit" className="btn">Subscribe</button>
											</form>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 footer-col">
									<div className="block text">								
										<Link to="home-4.html" className="logo-footer">
											<img src="img/logo-3.png" alt="Logo" />
										</Link>
										
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim ipsum dolor sit amet, consec tetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit</p>
									
									</div>
								</div>
								
								<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 footer-col">
									<div className="block text">
										<h2 className="block-title">Contact Us</h2>
										
										<div className="block-content">
											<div className="contact">
												<p><strong>Address</strong> : 123 Suspendis matti, VST District, NY Accums, North American</p>
												<p><strong>Hotline</strong> : 012345678910 - 098765432100</p>
												<p><strong>Email</strong> : <Link to="mailto:support@domain.com">support@domain.com</Link></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>		
				</div>
				
				<div className="footer-copyright">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
								<div className="copyright">Copyright © 2018 - All rights reserved. Powered by TivaTheme.</div>
							</div>
							
							<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 align-right">
								<div className="payment">
									<img src="img/payment.png" alt="Payment" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}			

module.exports = Footer;