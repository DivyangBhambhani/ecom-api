var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');

class ShoppingCart extends React.Component {
	render() {
		return(
			<div>
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
						<div className="col-md-10 col-md-offset-1">
							<div className="page-cart">
								<div className="table-responsive">
									<table className="cart-summary table table-bordered">
										<thead>
											<tr>
												<th className="width-20">&nbsp;</th>
												<th className="width-80 text-center">Image</th>
												<th>Name</th>
												<th className="width-100 text-center">Unit price</th>
												<th className="width-100 text-center">Qty</th>
												<th className="width-100 text-center">Total</th>
											</tr>
										</thead>
										
										<tbody>
											<tr>
												<td className="product-remove">
													<Link className="remove" to="#">
														<i className="fa fa-times"></i>
													</Link>
												</td>
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
												<td>
													<div className="product-quantity">
														<div className="qty">
															<div className="input-group">
																<input type="text" name="qty" value="1" data-min="1" />
																<span className="adjust-qty">
																	<span className="adjust-btn plus">+</span>
																	<span className="adjust-btn minus">-</span>
																</span>
															</div>
														</div>
													</div>
												</td>
												<td className="text-center">
													₹265
												</td>
											</tr>
											
											<tr>
												<td className="product-remove">
													<Link className="remove" to="#">
														<i className="fa fa-times"></i>
													</Link>
												</td>
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
												<td>
													<div className="product-quantity">
														<div className="qty">
															<div className="input-group">
																<input type="text" name="qty" value="2" data-min="1" />
																<span className="adjust-qty">
																	<span className="adjust-btn plus">+</span>
																	<span className="adjust-btn minus">-</span>
																</span>
															</div>
														</div>
													</div>
												</td>
												<td className="text-center">
													₹300
												</td>
											</tr>
										</tbody>
										
										<tfoot>
											<tr className="cart-total">
												<td rowSpan="3" colSpan="3"></td>
												<td colSpan="2" className="text-right">Total products</td>
												<td colSpan="1" className="text-center">₹565</td>
											</tr>
											<tr className="cart-total">
												<td colSpan="2" className="text-right">Total shipping</td>
												<td colSpan="1" className="text-center">₹10</td>
											</tr>
											<tr className="cart-total">
												<td colSpan="2" className="total text-right">Total</td>
												<td colSpan="1" className="total text-center">₹575</td>
											</tr>
										</tfoot>
									</table>
								</div>
								
								<div className="checkout-btn">
									<Link to="product-checkout.html" className="btn btn-primary pull-right">
										<span>Proceed to checkout</span>
										<i className="fa fa-angle-right ml-xs"></i>
									</Link>
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

module.exports = ShoppingCart;