var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');

class Contact extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<div id="breadcrumb">
					<div className="container">
						<h2 className="title">Contact</h2>
						
						<ul className="breadcrumb">
							<li><Link to="#" title="Home">Home</Link></li>
							<li><span>Contact</span></li>
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="contact-page">
					    <div className="contact-info">
					        <div className="row">
					            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					                <div className="item d-flex">
					                    <div className="item-left">
					                        <div className="icon"><i className="zmdi zmdi-email"></i></div>
					                    </div>
					                    <div className="item-right d-flex">
					                        <div className="title">Email:</div>
					                        <div className="content"><Link to="/mailto:support@domain.com">support@domain.com</Link>
					                            <br /><Link to="/mailto:contact@domain.com">contact@domain.com</Link></div>
					                    </div>
					                </div>
					            </div>
					            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					                <div className="item d-flex justify-content-center">
					                    <div className="item-left">
					                        <div className="icon"><i className="zmdi zmdi-home"></i></div>
					                    </div>
					                    <div className="item-right d-flex">
					                        <div className="title">Address:</div>
					                        <div className="content">23 Suspendis matti, Visaosang Building VST
					                            <br /> District, NY Accums, North American</div>
					                    </div>
					                </div>
					            </div>
					            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
					                <div className="item d-flex justify-content-end">
					                    <div className="item-left">
					                        <div className="icon"><i className="zmdi zmdi-phone"></i></div>
					                    </div>
					                    <div className="item-right d-flex">
					                        <div className="title">Holine:</div>
					                        <div className="content">0123-456-78910
					                            <br />0987-654-32100</div>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					    <div className="section row">
					        <div className="col-md-12 col-sm-12 col-lg-12 text-center"><img src="img/map.png" alt="Map image" className="img-responsive mapImage" /></div>
					    </div>

					    <div className="section pb60 col-md-12">
					        <div className="contact-form form">
					            <form>
					                <div className="form-group row">
					                    <div className="col-md-6">
					                        <input type="text" name="name" placeholder="YOUR NAME" />
					                    </div>
					                    <div className="col-md-6">
					                        <input type="email" name="email" placeholder="YOUR EMAIL" />
					                    </div>
					                </div>
					                <div className="form-group">
					                    <input type="text" name="subject" placeholder="SUBJECT" />
					                </div>
					                <div className="form-group">
					                    <textarea rows="10" name="content" placeholder="MESSAGE"></textarea>
					                </div>
					                <div className="form-group text-center">
					                    <input type="submit" className="btn btn-primary" value="Send Message" />
					                </div>
					            </form>
					        </div>
					    </div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

module.exports = Contact;