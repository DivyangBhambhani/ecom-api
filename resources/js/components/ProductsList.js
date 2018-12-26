var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');

class ProductsList extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<div id="content" className="site-content">
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">Fruit</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><Link to="#">Fruit</Link></li>
								<li><span>Tomato</span></li>
							</ul>
						</div>
					</div>
					<div className="home-1">
					<div className="container">
						<div className="row">
							<div className="container">
								<div className="col-md-10 col-sm-12 col-lg-10 col-lg-offset-1 col-md-offset-1">
									<div id="left-column" className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12">
										<div className="block product-categories">
											<h3 className="block-title">Categories</h3>
											
											<div className="block-content">
												<div className="item">
													<span className="arrow collapsed" data-toggle="collapse" data-target="#vegetables" aria-expanded="false" role="button">
														<i className="zmdi zmdi-minus"></i>
														<i className="zmdi zmdi-plus"></i>
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
														<i className="zmdi zmdi-minus"></i>
														<i className="zmdi zmdi-plus"></i>
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
														<i className="zmdi zmdi-minus"></i>
														<i className="zmdi zmdi-plus"></i>
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
										<div className="block product-filter">
											<h3 className="block-title">Catalog</h3>
										
											<div className="block-content">
												<div className="filter-item">
													<h3 className="filter-title">Categories</h3>
													
													<div className="filter-content">
														<ul>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Tomato <span className="quantity">(20)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Broccoli <span className="quantity">(14)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Cabbage <span className="quantity">(8)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Cucumber <span className="quantity">(12)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Eggplant <span className="quantity">(15)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Pea <span className="quantity">(22)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Pineapple <span className="quantity">(20)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Lettuce <span className="quantity">(10)</span></Link>
																</label>
															</li>
														</ul>
													</div>
												</div>
												
												<div className="filter-item">
													<h3 className="filter-title">Manufacture</h3>
													
													<div className="filter-content">
														<ul>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Samsung <span className="quantity">(20)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Dell <span className="quantity">(14)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Polygon <span className="quantity">(8)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Newment <span className="quantity">(12)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Asus <span className="quantity">(15)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Mac <span className="quantity">(22)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Vaio <span className="quantity">(20)</span></Link>
																</label>
															</li>
															<li>
																<label className="check">
																	<span className="custom-checkbox">
																		<input type="checkbox" />
																		<span className="checkmark"></span>
																	</span>
																	<Link to="#">Lettuce <span className="quantity">(10)</span></Link>
																</label>
															</li>
														</ul>
													</div>
												</div>
												
												
												<div className="filter-item">
													<h3 className="filter-title">By Flavor</h3>
													
													<div className="block-content">
														<div className="filter-color">
															<div className="left">
																<div className="item">
																	<label className="color color-1"></label>
																	<span className="color-label">Blueberry</span>
																	<span>(3)</span>
																</div>
																<div className="item">
																	<label className="color color-3"></label>
																	<span className="color-label">Mango</span>
																	<span>(2)</span>
																</div>
																<div className="item">
																	<label className="color color-5"></label>
																	<span className="color-label">Strawberry</span>
																	<span>(2)</span>
																</div>
															</div>
															<div className="right">
																<div className="item">
																	<label className="color color-2"></label>
																	<span className="color-label">Grapes</span>
																	<span>(1)</span>
																</div>
																<div className="item">
																	<label className="color color-4"></label>
																	<span className="color-label">Almond</span>
																	<span>(3)</span>
																</div>
																<div className="item">
																	<label className="color color-6"></label>
																	<span className="color-label">Cherry</span>
																	<span>(10)</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="block tags product-tags">
											<h3 className="block-title">Product Tags</h3>
										
											<div className="block-content">
												<ul>
													<li><Link to="#">Hot Trend</Link></li>
													<li><Link to="#">Flour</Link></li>
													<li><Link to="#">200gm</Link></li>
													<li><Link to="#">500gm</Link></li>
													<li><Link to="#">1kg</Link></li>
													<li><Link to="#">Cookies</Link></li>
												</ul>
											</div>
										</div>
									</div>
									
									<div id="center-column" className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
										<div className="product-category-page">
											<div className="products-bar">
												<div className="row">
													<div className="col-md-6 col-xs-6">
														<div className="gridlist-toggle" role="tablist">
															<ul className="nav nav-tabs">
																<li className="active"><Link to="#products-grid" data-toggle="tab" aria-expanded="true"><i className="fa fa-th-large"></i></Link></li>
																<li><Link to="#products-list" data-toggle="tab" aria-expanded="false"><i className="fa fa-bars"></i></Link></li>
															</ul>
														</div>
														
														<div className="total-products">There are 12 products</div>
													</div>
													
													<div className="col-md-6 col-xs-6">
														<div className="filter-bar">
															<form action="#" className="pull-right">
																<div className="select">
																	<select className="form-control">
																		<option value="">Sort By</option>
																		<option value="1">Price: Lowest first</option>
																		<option value="2">Price: Highest first</option>
																		<option value="3">Product Name: A to Z</option>
																		<option value="4">Product Name: Z to A</option>
																		<option value="5">In stock</option>
																	</select>
																</div>
															</form>
															<form action="#" className="pull-right">
																<div className="select">
																	<select className="form-control">
																		<option value="">Relevance</option>
																		<option value="1">Price: Lowest first</option>
																		<option value="2">Price: Highest first</option>
																		<option value="3">Product Name: A to Z</option>
																		<option value="4">Product Name: Z to A</option>
																		<option value="5">In stock</option>
																	</select>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
											
											<div className="tab-content">
												<div className="tab-pane active" id="products-grid">
													<div className="products-block">
														<div className="row">
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/4.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/14.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/17.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/8.jpg"} alt="Product Image" />
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
															</div>
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/9.jpg"} alt="Product Image" />
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
															</div>
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/15.jpg"} alt="Product Image" />
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
															</div>
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/10.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/33.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/22.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/20.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/23.jpg"} alt="Product Image" />
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
															
															<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																<div className="product-item">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/30.jpg"} alt="Product Image" />
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
												
												<div className="tab-pane" id="products-list">
													<div className="products-block layout-5">
														<div className="product-item">
															<div className="row">
																<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/4.jpg"} alt="Product Image" />
																		</Link>
																	</div>
																</div>
																
																<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
																	<div className="product-info">
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
																			<span className="review-count">(3 Reviews)</span>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-stock">
																			<i className="fa fa-check-square-o" aria-hidden="true"></i>In stock  
																		</div>
																		
																		<div className="product-description">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																				<span>Add To Cart</span>
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
														
														<div className="product-item">
															<div className="row">
																<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/14.jpg"} alt="Product Image" />
																		</Link>
																	</div>
																</div>
																
																<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
																	<div className="product-info">
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
																			<span className="review-count">(3 Reviews)</span>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-stock">
																			<i className="fa fa-check-square-o" aria-hidden="true"></i>In stock  
																		</div>
																		
																		<div className="product-description">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																				<span>Add To Cart</span>
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
													
														<div className="product-item">
															<div className="row">
																<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/17.jpg"} alt="Product Image" />
																		</Link>
																	</div>
																</div>
																
																<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
																	<div className="product-info">
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
																			<span className="review-count">(3 Reviews)</span>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-stock">
																			<i className="fa fa-check-square-o" aria-hidden="true"></i>In stock  
																		</div>
																		
																		<div className="product-description">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																				<span>Add To Cart</span>
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
													
														<div className="product-item">
															<div className="row">
																<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/8.jpg"} alt="Product Image" />
																		</Link>
																	</div>
																</div>
																
																<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
																	<div className="product-info">
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
																			<span className="review-count">(3 Reviews)</span>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-stock">
																			<i className="fa fa-check-square-o" aria-hidden="true"></i>In stock  
																		</div>
																		
																		<div className="product-description">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																				<span>Add To Cart</span>
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
													
														<div className="product-item">
															<div className="row">
																<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
																	<div className="product-image">
																		<Link to="/productDetails">
																			<img className="img-responsive" src={baseURL + "img/product/9.jpg"} alt="Product Image" />
																		</Link>
																	</div>
																</div>
																
																<div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
																	<div className="product-info">
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
																			<span className="review-count">(3 Reviews)</span>
																		</div>
																		
																		<div className="product-price">
																			<span className="sale-price">₹80.00</span>
																			<span className="base-price">₹90.00</span>
																		</div>
																		
																		<div className="product-stock">
																			<i className="fa fa-check-square-o" aria-hidden="true"></i>In stock  
																		</div>
																		
																		<div className="product-description">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien urna, commodo ut molestie vitae, feugiat tincidunt ligula...
																		</div>
																		
																		<div className="product-buttons">
																			<Link className="add-to-cart" to="/shoppingCart">
																				<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																				<span>Add To Cart</span>
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
											
											<div className="pagination-bar">
												<div className="row">
													<div className="col-md-4 col-sm-4 col-xs-12">
														<div className="text">Showing 1-12 of 20 item(s)</div>
													</div>
													
													<div className="col-md-8 col-sm-8 col-xs-12">
														<div className="pagination">
															<ul className="page-list">
																<li><Link to="#" className="prev">Previous</Link></li>
																<li><Link to="#" className="current">1</Link></li>
																<li><Link to="#">2</Link></li>
																<li><Link to="#" className="next">Next</Link></li>
															</ul>
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
				<Footer />
			</div>
		)
	}
}

module.exports = ProductsList;