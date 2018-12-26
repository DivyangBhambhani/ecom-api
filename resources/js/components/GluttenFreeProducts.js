var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');
var loadjs = require('loadjs');

class GluttenFreeProducts extends React.Component {
	componentDidMount() {
		loadjs('js/main.js', function() {});
	}
	render() {
		return(
			<div>
				<Header/>
				<div id="content" className="site-content">
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">Glutten Free Products</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><span>Glutten Free Products</span></li>
							</ul>
						</div>
					</div>
					<div className="home-2">
						<div className="container">
							<div className="col-md-10 col-md-offset-1">
								<div className="section slideshow">
									<div className="container">
										<div className="tiva-slideshow-wrapper">
											<div id="tiva-slideshow" className="nivoSlider">
												<Link to="#">
													<img className="img-responsive" src="img/slideshow/home2-slideshow-1.jpg" alt="Slideshow Image" />
												</Link>
												<Link to="#">
													<img className="img-responsive" src="img/slideshow/home2-slideshow-2.jpg" alt="Slideshow Image" />
												</Link>
												<Link to="#">
													<img className="img-responsive" src="img/slideshow/home2-slideshow-3.jpg" alt="Slideshow Image" />
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div className="section banners">
									<div className="container">
										<div className="row text-center">
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-10">
												<div className="banner-item disp-inline-block effect">
													<Link to="#">
														<img className="img-responsive" src="img/banner/home2-banner-1.png" alt="Banner 1" />
													</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-10">
												<div className="banner-item disp-inline-block effect">
													<Link to="#">
														<img className="img-responsive" src="img/banner/home2-banner-2.png" alt="Banner 2" />
													</Link>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-10">
												<div className="banner-item disp-inline-block effect">
													<Link to="#">
														<img className="img-responsive" src="img/banner/home2-banner-3.png" alt="Banner 3" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

							
								<div className="section two-columns pb60">
									<div className="container">
										<div className="row ">
											<div className="col-20p col-md-3 left-column">
												<div className="section product-categories">
													<div className="block-title">
														<h2 className="title">Categories</h2>
													</div>
													
													<div className="block-content">
														<div className="item">
															<span className="arrow collapsed" data-toggle="collapse" data-target="#vegetables" aria-expanded="false" role="button">
																<i className="fa fa-angle-down" aria-hidden="true"></i>
																<i className="fa fa-angle-right" aria-hidden="true"></i>
															</span>
															
															<Link className="category-title" to="#">Vegetables</Link>
															<div className="sub-category collapse" id="vegetables" aria-expanded="true" role="main">
																<div className="item">
																	<Link to="#">Tomato</Link>
																</div>
																<div className="item">
																	<Link to="#">Broccoli</Link>
																</div>
																<div className="item">
																	<Link to="#">Cabbage</Link>
																</div>
																<div className="item">
																	<Link to="#">Cucumber</Link>
																</div>
															</div>
														</div>
														
														<div className="item">
															<span className="arrow collapsed" data-toggle="collapse" data-target="#fruits" aria-expanded="false" role="button">
																<i className="fa fa-angle-down" aria-hidden="true"></i>
																<i className="fa fa-angle-right" aria-hidden="true"></i>
															</span>
															
															<Link className="category-title" to="#">Fruits</Link>
															<div className="sub-category collapse" id="fruits" aria-expanded="true" role="main">
																<div className="item">
																	<Link to="#">Orange</Link>
																</div>
																<div className="item">
																	<Link to="#">Apple</Link>
																</div>
																<div className="item">
																	<Link to="#">Banana</Link>
																</div>
																<div className="item">
																	<Link to="#">Strawberry</Link>
																</div>
															</div>
														</div>
														
														<div className="item">
															<span className="arrow collapsed" data-toggle="collapse" data-target="#juices" aria-expanded="false" role="button">
																<i className="fa fa-angle-down" aria-hidden="true"></i>
																<i className="fa fa-angle-right" aria-hidden="true"></i>
															</span>
															
															<Link className="category-title" to="#">Juices</Link>
															<div className="sub-category collapse" id="juices" aria-expanded="true" role="main">
																<div className="item">
																	<Link to="#">Orange Juices</Link>
																</div>
																<div className="item">
																	<Link to="#">Tomato Juices</Link>
																</div>
																<div className="item">
																	<Link to="#">Apple Juices</Link>
																</div>
																<div className="item">
																	<Link to="#">Peaches Juices</Link>
																</div>
															</div>
														</div>
														
														<div className="item">
															<Link className="category-title" to="#">Tea and Coffee</Link>
														</div>
														
														<div className="item">
															<Link className="category-title" to="#">Jam</Link>
														</div>
														
														<div className="item">
															<Link className="category-title" to="#">SeaFood</Link>
														</div>
														
														<div className="item">
															<Link className="category-title" to="#">Fresh Meats</Link>
														</div>
													</div>
												</div>

												<div className="section testimonial">
													<div className="block-title">
														<h2 className="title">Testimonial</h2>
													</div>
													
													<div className="block-content">
														<div className="testimonial-wrap owl-theme owl-carousel">
															<div className="item">
																<div className="image"><img src="img/testimonial-1.png" alt="" /></div>
																<div className="content">“Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum.”</div>
																<div className="name">WILLIAM JAMES</div>
																<div className="job">Hairstyle</div>
															</div>
															
															<div className="item">
																<div className="image"><img src="img/testimonial-2.png" alt="" /></div>
																<div className="content">“Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum.”</div>
																<div className="name">WILLIAM JAMES</div>
																<div className="job">Hairstyle</div>
															</div>
															
															<div className="item">
																<div className="image"><img src="img/testimonial-3.png" alt="" /></div>
																<div className="content">“Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum.”</div>
																<div className="name">WILLIAM JAMES</div>
																<div className="job">Hairstyle</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="col-80p col-md-9 right-column">
												<div className="section products-block category-tab">
													<div className="block-title">
														<h2 className="title">Vegetables</h2>
													</div>
													
													<div className="block-content">
														<div className="tab-nav">
															<ul>
																<li className="active">
																	<Link data-toggle="tab" to="#new-arrivals">
																		<span>New Arrivals</span>
																	</Link>
																</li>
																<li>
																	<Link data-toggle="tab" to="#best-seller">
																		<span>Best Seller</span>
																	</Link>
																</li>
																<li>
																	<Link data-toggle="tab" to="#on-sale">
																		<span>On Sale</span>
																	</Link>
																</li>
															</ul>
														</div>
														
														<div className="tab-content">
															<div role="tabpanel" className="tab-pane fade in active" id="new-arrivals">
																<div className="products owl-theme owl-carousel">
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/4.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/8.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹120.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>	
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/9.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star on"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>	
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/10.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹96.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
															
															<div role="tabpanel" className="tab-pane fade" id="best-seller">
																<div className="products owl-theme owl-carousel">
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/8.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹120.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>	
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/10.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹96.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/4.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/33.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
															
															<div role="tabpanel" className="tab-pane fade" id="on-sale">
																<div className="products owl-theme owl-carousel">
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/4.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/8.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹120.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>	
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/9.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star on"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>	
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/10.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹96.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="section banners-block">
													<div className="row margin-15">
														<div className="col-lg-6 col-md-6 col-sm-6 padding-15">
															<div className="banner-item effect">
																<Link to="#">
																	<img className="img-responsive" src="img/banner/home2-banner-4.png" alt="Banner" />
																</Link>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-6 padding-15">
															<div className="banner-item effect">
																<Link to="#">
																	<img className="img-responsive" src="img/banner/home2-banner-5.png" alt="Banner" />
																</Link>
															</div>
														</div>
													</div>
												</div>


												<div className="row">
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														<div className="section products-block category-double">
															<div className="block-title">
																<h2 className="title">Fruits</h2>
															</div>
															
															<div className="block-content">
																<div className="products owl-theme owl-carousel">
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/4.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/8.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹120.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/2.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														<div className="section products-block category-double">
															<div className="block-title">
																<h2 className="title">Juices</h2>
															</div>
															
															<div className="block-content">
																<div className="products owl-theme owl-carousel">
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/16.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/13.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹120.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																	
																	<div className="product-item">
																		<div className="product-image">
																			<Link to="/productDetails">
																				<img src="img/product/28.jpg" alt="Product Image" />
																			</Link>
																		</div>
																		
																		<div className="product-title">
																			<Link to="/productDetails">
																				Organic Strawberry Fruits
																			</Link>
																		</div>
																		
																		<div className="product-rating">
																			<div className="star on"></div>
																			<div className="star on"></div>
																			<div className="star on "></div>
																			<div className="star on"></div>
																			<div className="star"></div>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																			</Link>
																			
																			<Link className="add-wishlist" to="#">
																				<i className="fa fa-heart" aria-hidden="true"></i>												
																			</Link>
																			
																			<Link className="quickview" to="/productDetails">
																				<i className="fa fa-eye" aria-hidden="true"></i>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<Footer/>
			</div>
		)
	}
}

module.exports = GluttenFreeProducts;