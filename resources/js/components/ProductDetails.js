var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');
var loadjs = require('loadjs');
var common = require('./common/common');
const api = require("../utils/api");
const Review = require('./Review')

class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryId:0,
	      	categoryName:'',
			productDetails: [],
			reviews: [],
			productImages: []
		}
		this.handleCategoryState = this.handleCategoryState.bind(this);	
	}

	handleCategoryState(categoryInfo) {
		var categoryId = categoryInfo.id;
		var categoryName = categoryInfo.name;
		const {productId} = this.props.match.params;
		this.setState({categoryId, categoryName}, function () {
			api.getProductDetails(categoryId, productId).then(function (res) {
				 var productDetails = res;
				 this.setState({ productDetails }, function () {
				 	// Fetch PRoduct Images
				 	api.getImagesByProduct(this.state.productDetails.href.images_link).then(function (productImages) {
						this.setState({ productImages });
					}.bind(this));

					// Fetch Product Reviews
				 	api.getReviewsByProduct(categoryId, productId).then(function (reviews) {
						this.setState({ reviews });
					}.bind(this));
				 
				 });
			}.bind(this));
		})
	}

	componentDidMount() {
		loadjs('/js/main.js', function() {
			console.log('loaded main.js');
		});
		var categoryInfo = common.decodeURItoCategoryInfo(this.props.match.params.categoryName, this.handleCategoryState);		
	}

	render() {
		const {productDetails, reviews, productImages} = this.state;		
		var productReviews = [];
		if (reviews && typeof reviews != 'undefined') {
			productReviews = reviews;
		}
		return(
			<div className="container">
				<Header />
				<div id="content" className="site-content">
					
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">{productDetails.name}</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><Link to="#">{this.state.categoryName}</Link></li>
								<li><span>{productDetails.name}</span></li>
							</ul>
						</div>
					</div>

					<div className="container pb60">
						<div className="col-md-10 col-md-offset-1">
							<div className="product-detail">
								<div className="products-block layout-5">
									<div className="product-item">
										<div className="product-title">
											{productDetails.name}
										</div>
													
										<div className="row">
											<div className="product-left col-md-4 col-sm-4 col-xs-12">
												<div className="product-image horizontal">
													<div className="main-image">
														<img className="img-responsive" src={typeof productImages[0] != "undefined" ? "data:image/png;base64," + productImages[0].image : ""} alt="Product Image" />
													</div>
													<div className="thumb-images owl-theme owl-carousel">
														<img className="img-responsive" src={typeof productImages[0] != "undefined" ? "data:image/png;base64," + productImages[0].image : ""} alt="Product Image" />
														<img className="img-responsive" src={typeof productImages[1] != "undefined" ? "data:image/png;base64," + productImages[1].image : ""} alt="Product Image" />
														<img className="img-responsive" src={typeof productImages[2] != "undefined" ? "data:image/png;base64," + productImages[2].image : ""} alt="Product Image" />
														<img className="img-responsive" src={typeof productImages[3] != "undefined" ? "data:image/png;base64," + productImages[3].image : ""} alt="Product Image" />
													</div>
												</div>
											</div>
											
											<div className="product-right col-md-5 col-sm-4 col-xs-12">
												<div className="product-info">
													<div className="product-price">
														<span className="sale-price">₹{productDetails.effectivePrice}</span>
														<span className="base-price">₹{productDetails.price}</span>
													</div>
													
													<div className={(productDetails.stock > 0) ? "product-stock" : "product-stock txtDanger"}>
														<span className="availability">Availability :</span>
														 
															<i className={(productDetails.stock > 0) 
																? 'fa fa-check-square-o' 
																: 'fa fa-times text-danger'} 
																aria-hidden='true'></i>
															{(productDetails.stock > 0) 
																? 'In stock' 
																: 'Out of Stock'}
													</div>
													
													<div className="product-short-description">
														{productDetails.short_desc}
													</div>
													
													<div className="product-variants border-bottom">
														<div className="product-variants-item">
															<span className="control-label">Size :</span>
															<select>
																<option value="1" title="S">S</option>
																<option value="2" title="M">M</option>
																<option value="3" title="L">L</option>
																<option value="4" title="One size">One size</option>
															</select>
														</div>

														<div className="product-variants-item">
															<span className="control-label">Color :</span>

															<ul>
																<li>
																	<input className="input-color" readOnly type="radio" value="1" />
																	<span className="color" style={{backgroundColor: '#E84C3D'}}></span>
																</li>
																<li>
																	<input className="input-color" readOnly type="radio" value="2" />
																	<span className="color" style={{backgroundColor: '#5D9CEC'}}></span>
																</li>
																<li>
																	<input className="input-color" readOnly type="radio" value="3" />
																	<span className="color" style={{backgroundColor: '#A0D468'}}></span>
																</li>
																<li>
																	<input className="input-color" readOnly type="radio" value="4" />
																	<span className="color" style={{backgroundColor: '#F1C40F'}}></span>
																</li>
																<li>
																	<input className="input-color" readOnly type="radio" value="5" />
																	<span className="color" style={{backgroundColor: '#964B00'}}></span>
																</li>
																<li>
																	<input className="input-color" readOnly type="radio" value="6" />
																	<span className="color" style={{backgroundColor: '#FCCACD'}}></span>
																</li>
															</ul>
														</div>
													</div>
													
													<div className="product-add-to-cart border-bottom">
														<div className="product-quantity">
															<span className="control-label">QTY :</span>
															<div className="qty">
																<div className="input-group">
																	<input type="text" readOnly name="qty" value="1" data-min="1" />
																	<span className="adjust-qty">
																		<span className="adjust-btn plus">+</span>
																		<span className="adjust-btn minus">-</span>
																	</span>
																</div>
															</div>
														</div>
														
														<div className="product-buttons">
															{(productDetails.stock > 0) 
																? 	<Link className="add-to-cart" to="/shoppingCart">
																		<i className="fa fa-shopping-basket" aria-hidden="true"></i>
																		<span>Add To Cart</span>
																	</Link> 
																: ''}															
															
															<Link className="add-wishlist" to="#">
																<i className="fa fa-heart" aria-hidden="true"></i>
															</Link>
															<Link className="share" to="#">
																<i className="zmdi zmdi-share" aria-hidden="true"></i>
															</Link>
														</div>
													</div>
													
													<div className="product-share border-bottom">
														<span className="badge">
															<i className="fa fa-info-circle" aria-hidden="true"></i> Return Policy
														</span>
														<span> Food items are <b>non-returnable</b>.</span>
													</div>
													
													<div className="product-review border-bottom">
														<div className="item">
															<div className="product-quantity">
																<span className="control-label">Review :</span>
																<div className="product-rating">
																	<div className="star on"></div>
																	<div className="star on"></div>
																	<div className="star on"></div>
																	<div className="star on"></div>
																	<div className="star"></div>
																</div>
															</div>	
														</div>
														
														<div className="item">
															<Link to="#"><i className="zmdi zmdi-comments" aria-hidden="true"></i><span className="text">Read Reviews (3)</span></Link>
														</div>
														
														<div className="item">
															<Link to="#"><i className="zmdi zmdi-edit" aria-hidden="true"></i><span className="text">Write a review</span></Link>
														</div>
													</div>
													
													<div className="product-extra">
														<div className="item">
															<span className="control-label">Product Type :</span><span className="control-label">Glutten Free</span>
														</div>
														<div className="item">
															<span className="control-label">Category:</span>
															<Link to={'/glutten_free_products/'+this.props.match.params.categoryName+'/'}><span>{this.state.categoryName}</span></Link>
														</div>
														<div className="item">
															<span className="control-label"><i className="fa fa-circle vegan-icon"></i> This is a Vegetarian Product</span>
														</div>
													</div>
												</div>
											</div>
											
											<div className="payment-intro col-md-3 col-sm-4 col-xs-12">
												<div className="block-content">
													<div className="item">
														<img className="img-responsive" src={baseURL + "img/home2-payment-1.png"} alt="Payment Intro" />
														<h3 className="title">Free Shipping item</h3>
														<div className="content">Proin gravida nibh vel velit auctor aliquet aenean</div>
													</div>
													<div className="item">
														<img className="img-responsive" src={baseURL + "img/home2-payment-2.png"} alt="Payment Intro" />
														<h3 className="title">Secured Payment</h3>
														<div className="content">Proin gravida nibh vel velit auctor aliquet aenean</div>
													</div>
													<div className="item">
														<img className="img-responsive" src={baseURL + "img/home2-payment-3.png"} alt="Payment Intro" />
														<h3 className="title">money back guarantee</h3>
														<div className="content">Proin gravida nibh vel velit auctor aliquet aenean</div>
													</div>
												</div>
											</div>
										</div>
										
										<div className="product-tab">
											<div className="tab-nav">
												<ul>
													<li className="active">
														<Link data-toggle="tab" to="#description">
															<span>Description</span>
														</Link>
													</li>
													<li>
														<Link data-toggle="tab" to="#additional-information">
															<span>Additional Information</span>
														</Link>
													</li>
													<li>
														<Link data-toggle="tab" to="#review">
															<span>Review</span>
														</Link>
													</li>
												</ul>
											</div>
											
											<div className="tab-content">
												<div role="tabpanel" className="tab-pane fade in active" id="description">
													<p>
														{productDetails.long_desc}
													</p>
												</div>
												
												<div role="tabpanel" className="tab-pane fade" id="additional-information">
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
												</div>
												
												<div role="tabpanel" className="tab-pane fade" id="review">
													<div className="reviews">
														<div className="comments-list">
															{productReviews.length != 0 ? productReviews.map((review, index) => (
																<Review key={index} reviewData={review} />
															)) : 'No reviews available for this product.'}
														</div>
														
														<div className="review-form">
															<h4 className="title">Write a review</h4>
															
															<form action="" method="post" className="form-validate">
																<div className="form-group">
																	<div className="text">Your Rating</div>
																	<div className="product-rating">
																		<div className="star"></div>
																		<div className="star"></div>
																		<div className="star"></div>
																		<div className="star"></div>
																		<div className="star"></div>
																	</div>
																</div>
																
																<div className="form-group">
																	<div className="text">You review<sup className="required">*</sup></div>
																	<textarea id="comment" name="comment" cols="45" rows="6" aria-required="true"></textarea>
																</div>
																
																<div className="form-group">
																	<button className="btn btn-primary">Send your review</button>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="products-block related-products item-4">
								<div className="block-title">
									<h2 className="title">Related <span>Products</span></h2>
								</div>
								
								<div className="block-content">
									<div className="products owl-theme owl-carousel">
										<div className="product-item">
											<div className="product-image">
												<Link to="product-detail-left-sidebar.html">
													<img src={baseURL + "img/product/4.jpg"} alt="Product Image" />
												</Link>
											</div>
											
											<div className="product-title">
												<Link to="product-detail-left-sidebar.html">
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
												
												<Link className="quickview" to="#">
													<i className="fa fa-eye" aria-hidden="true"></i>
												</Link>
											</div>
										</div>
										
										<div className="product-item">
											<div className="product-image">
												<Link to="product-detail-left-sidebar.html">
													<img src={baseURL + "img/product/15.jpg"} alt="Product Image" />
												</Link>
											</div>
											
											<div className="product-title">
												<Link to="product-detail-left-sidebar.html">
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
												
												<Link className="quickview" to="#">
													<i className="fa fa-eye" aria-hidden="true"></i>
												</Link>
											</div>
										</div>
										
										<div className="product-item">
											<div className="product-image">
												<Link to="product-detail-left-sidebar.html">
													<img src={baseURL + "img/product/31.jpg"} alt="Product Image" />
												</Link>
											</div>
											
											<div className="product-title">
												<Link to="product-detail-left-sidebar.html">
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
												
												<Link className="quickview" to="#">
													<i className="fa fa-eye" aria-hidden="true"></i>
												</Link>
											</div>
										</div>
										
										<div className="product-item">
											<div className="product-image">
												<Link to="product-detail-left-sidebar.html">
													<img src={baseURL + "img/product/9.jpg"} alt="Product Image" />
												</Link>
											</div>
											
											<div className="product-title">
												<Link to="product-detail-left-sidebar.html">
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
												
												<Link className="quickview" to="#">
													<i className="fa fa-eye" aria-hidden="true"></i>
													</Link>
											</div>
										</div>
										
										<div className="product-item">
											<div className="product-image">
												<Link to="product-detail-left-sidebar.html">
													<img src={baseURL + "img/product/15.jpg"} alt="Product Image" />
												</Link>
											</div>
											
											<div className="product-title">
												<Link to="product-detail-left-sidebar.html">
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
												
												<Link className="quickview" to="#">
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
				<Footer />
			</div>
		)
	}
}

module.exports = ProductDetails;