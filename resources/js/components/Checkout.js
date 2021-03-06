var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');

class Checkout extends React.Component {
	render() {
		return(
			<div className="container">
				<Header />
				<div id="content" className="site-content">
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">Shopping Cart</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><span>Shopping Cart</span></li>
							</ul>
						</div>
					</div>

					<div className="container pb60">
						<div className="page-checkout">
							<div className="row">
								<div className="container">
									<div className="col-md-10 col-md-offset-1">
										<div className="checkout-left col-lg-9 col-md-9 col-sm-9 col-xs-12">
											<p>Returning customer? <Link className="login" to="user-login.html">Click here to login</Link>.</p>
											<div className="panel-group" id="accordion">
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseOne">
																Address
															</Link>
														</h4>
													</div>
													<div id="collapseOne" className="accordion-body collapse" style={{height: '0px'}}>
														<div className="panel-body">
															<form id="formaddress" className="form-horizontal">
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Country</label>
																		<select className="form-control">
																			<option value="">Select a country</option>
																			<option value="australia">Australia</option>
																			<option value="brazil">Brazil</option>
																		</select>
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-6">
																		<label>First Name</label>
																		<input type="text" className="form-control" />
																	</div>
																	<div className="col-md-6">
																		<label>Last Name</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Company Name</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Address </label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>City </label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<input type="submit" value="Save" className="btn pull-right" />
																	</div>
																</div>
															</form>
														</div>
													</div>
												</div>
												
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseTwo">
																Shipping
															</Link>
														</h4>
													</div>
													<div id="collapseTwo" className="accordion-body collapse" style={{height: '0px'}}>
														<div className="panel-body">
															<form id="formshipping" className="form-horizontal">
																<div className="form-group">
																	<div className="col-md-12">
																		<span className="remember-box checkbox">
																			<label>
																				<input type="checkbox" checked="checked" />Ship to billing address?
																			</label>
																		</span>
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Country</label>
																		<select className="form-control">
																			<option value="">Select a country</option>
																			<option value="australia">Australia</option>
																			<option value="brazil">Brazil</option>
																		</select>
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-6">
																		<label>First Name</label>
																		<input type="text" className="form-control" />
																	</div>
																	<div className="col-md-6">
																		<label>Last Name</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Company Name</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>Address </label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<label>City </label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group">
																	<div className="col-md-12">
																		<input type="submit" value="Save" className="btn pull-right" />
																	</div>
																</div>
															</form>
														</div>
													</div>
												</div>
												
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<Link className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" to="#collapseThree">
																Payment
															</Link>
														</h4>
													</div>
													<div id="collapseThree" className="accordion-body collapse" style={{height: '0px'}}>
														<div className="panel-body">
															<table className="cart-summary table table-bordered">
																<thead>
																	<tr>
																		<th className="width-80 text-center">Image</th>
																		<th>Name</th>
																		<th className="width-100 text-center">Unit price</th>
																		<th className="width-100 text-center">Qty</th>
																		<th className="width-100 text-center">Total</th>
																	</tr>
																</thead>
																
																<tbody>
																	<tr>
																		<td>
																			<Link to="/productDetails">
																				<img width="80" alt="Product Image" className="img-responsive" src="img/product/19.jpg" />
																			</Link>
																		</td>
																		<td>
																			<Link to="/productDetails" className="product-name">Organic Strawberry Fruits</Link>
																		</td>
																		<td className="text-center">
																			₹265
																		</td>
																		<td className="text-center">
																			1
																		</td>
																		<td className="text-center">
																			₹265
																		</td>
																	</tr>
																	
																	<tr>
																		<td>
																			<Link to="/productDetails">
																				<img width="80" alt="Product Image" className="img-responsive" src="img/product/31.jpg" />
																			</Link>
																		</td>
																		<td>
																			<Link to="/productDetails" className="product-name">Organic Strawberry Fruits</Link>
																		</td>
																		<td className="text-center">
																			₹150
																		</td>
																		<td className="text-center">
																			2
																		</td>
																		<td className="text-center">
																			₹300
																		</td>
																	</tr>
																</tbody>
															</table>

															<h4 className="heading-primary">Cart Total</h4>
															<table className="table cart-total">
																<tbody>
																	<tr>
																		<th>
																			Cart Subtotal
																		</th>
																		<td className="total">
																			₹431
																		</td>
																	</tr>
																	<tr>
																		<th>
																			Shipping
																		</th>
																		<td>
																			Free Shipping
																		</td>
																	</tr>
																	<tr>
																		<th>
																			<strong>Order Total</strong>
																		</th>
																		<td className="total">
																			₹431
																		</td>
																	</tr>
																</tbody>
															</table>

															<h4 className="heading-primary">Payment</h4>
															<form>
																<div className="item">
																	<input type="checkbox" />Pay by bank wire (order processing will be longer)
																</div>
																<div className="item">
																	<input type="checkbox" />Pay by check (order processing will be longer)
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>

											<div className="pull-right">
												<input type="submit" value="Place Order" name="proceed" className="btn btn-primary" />
											</div>
										</div>
										
										<div className="checkout-right col-lg-3 col-md-3 col-sm-3 col-xs-12">
											<h4 className="title">Cart Total</h4>
											<table className="table cart-total">
												<tbody>
													<tr className="cart-subtotal">
														<th>
															<strong>Cart Subtotal</strong>
														</th>
														<td>
															<strong><span className="amount">₹431</span></strong>
														</td>
													</tr>
													<tr className="shipping">
														<th>
															Shipping
														</th>
														<td>
															Free Shipping<input type="hidden" value="free_shipping" className="shipping-method" name="shipping_method" />
														</td>
													</tr>
													<tr className="total">
														<th>
															<strong>Order Total</strong>
														</th>
														<td>
															<strong><span className="amount">₹431</span></strong>
														</td>
													</tr>
												</tbody>
											</table>
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

module.exports = Checkout;