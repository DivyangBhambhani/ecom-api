var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;
var baseURL = 'http://localhost:8000/';

class Header extends React.Component {
	render() {
		return(
			<header id="header">
				<div className="container">
					<div className="header-top">
						<div className="row align-items-center">
							<div className="col-lg-5 col-md-5 col-sm-12">
								<div id="main-menu">
									<ul className="menu">
										<li>
											<NavLink activeClassName="activeNav" exact to="/">Home</NavLink>
										</li>
										
										<li className="dropdown">
											<NavLink activeClassName="activeNav"  to="/glutten_free_products">Glutten Free Products</NavLink>
											<div className="dropdown-menu">
												<ul>
													<li className="has-image">
														<img src={baseURL + "img/product/product-category-1.png"} alt="Product Category Image" />
														<Link to="/glutten_free_products/cooking-and-baking-flour">Cooking & Baking Flour</Link>
													</li>
													<li className="has-image">
														<img src={baseURL + "img/product/product-category-2.png"} alt="Product Category Image" />
														<Link to="/glutten_free_products/biscuits-and-cookies">Biscuits & Cookies</Link>
													</li>
													<li className="has-image">
														<img src={baseURL + "img/product/product-category-3.png"} alt="Product Category Image" />
														<Link to="/glutten_free_products/namkeens">Namkeens</Link>
													</li>
													<li className="has-image">
														<img src={baseURL + "img/product/product-category-4.png"} alt="Product Category Image" />
														<Link to="/glutten_free_products/snacks">Snacks</Link>
													</li>
													<li className="has-image">
														<img src={baseURL + "img/product/product-category-0.png"} alt="Product Category Image" />
														<Link to="/glutten_free_products/desserts-and-confectionaries">Desserts & Confectionaries</Link>
													</li>
												</ul>
											</div>
										</li>
										
										<li>
											<NavLink activeClassName="activeNav" to="//blog.drkiranshomeo.com/">Blog</NavLink>
										</li>

										<li>
											<NavLink activeClassName="activeNav" to="/about">About Us</NavLink>
										</li>
										
										<li>
											<NavLink activeClassName="activeNav" to="/contact">Contact</NavLink>
										</li>
									</ul>
								</div>
							</div>
							
							<div className="col-lg-2 col-md-2 col-sm-12 header-center justify-content-center">
								<div className="logo">
									<Link to="">
										<img className="img-responsive" src={baseURL + "img/logo.png"} alt="Logo" />
									</Link>
								</div>
								
								<span id="toggle-mobile-menu"><i className="zmdi zmdi-menu"></i></span>
							</div>
							
							
							<div className="col-lg-5 col-md-5 col-sm-12 header-right d-flex justify-content-end align-items-center">
								<div className="form-search">
									<form>
										<input type="text" className="form-input" placeholder="Search" />
										<button type="submit" className="fa fa-search"></button>
									</form>
								</div>
								
								<div className="block-cart dropdown">
									<div className="cart-title">
										<i className="fa fa-shopping-basket" aria-hidden="true"></i>
										<span className="cart-count">2</span>
									</div>
									
									<div className="dropdown-content">
										<div className="cart-content">
											<table>
												<tbody>
													<tr>
														<td className="product-image">
															<Link to="#">
																<img src={baseURL + "img/product/7.jpg"} alt="Product" />
															</Link>
														</td>
														<td>
															<div className="product-name">
																<Link to="#">Organic Strawberry Fruits</Link>
															</div>
															<div>	
																2 x <span className="product-price">$28.98</span>
															</div>
														</td>
														<td className="action">
															<Link className="remove" to="#">
																<i className="fa fa-trash-o" aria-hidden="true"></i>
															</Link>
														</td>
													</tr>
													
													<tr>
														<td className="product-image">
															<Link to="#">
																<img src={baseURL + "img/product/6.jpg"} alt="Product" />
															</Link>
														</td>
														<td>
															<div className="product-name">
																<Link to="#">Organic Strawberry</Link>
															</div>
															<div>	
																1 x <span className="product-price">$35.00</span>
															</div>
														</td>
														<td className="action">
															<Link className="remove" to="#">
																<i className="fa fa-trash-o" aria-hidden="true"></i>
															</Link>
														</td>
													</tr>
													
													<tr className="total">
														<td>Total:</td>
														<td colSpan="2">$92.96</td>
													</tr>
													
													<tr>
														<td colSpan="3">
															<div className="cart-button">
																<Link className="btn btn-primary" to="/shoppingCart">View Cart</Link>
																<Link className="btn btn-primary" to="/checkout">Checkout</Link>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								
								
								<div className="my-account dropdown toggle-icon">
									<div className="dropdown-toggle" data-toggle="dropdown">
										<i className="zmdi zmdi-menu"></i>
									</div>
									<div className="dropdown-menu">										
										<div className="item">
											<Link to="#"><i className="fa fa-cog"></i>My Account</Link>
										</div>
										<div className="item">
											<Link to="#"><i className="fa fa-sign-in"></i>Login</Link>
										</div>
										<div className="item">
											<Link to="#"><i className="fa fa-user"></i>Register</Link>
										</div>
										<div className="item">
											<Link to="#"><i className="fa fa-heart"></i>My Wishlists</Link>
										</div>										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</header>
		)
	}
}

module.exports = Header;