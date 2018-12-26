var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class OurProducts extends React.Component {
	render() {
		return(
			<div className="section products-block product-tab tab-2">
				<div className="block-title">
					<div className="sub-title">Fresh From Our Farm</div>
					<h2 className="title">Our <span>Products</span></h2>
				</div>
				
				<div className="block-content">
					<div className="container">
						<div className="tab-nav">
							<ul>
								<li className="active">
									<Link data-toggle="tab" to="#all-products">
										<img src="img/product/product-category-0.png" alt="All Product" />
										<span>All Products</span>
									</Link>
								</li>
								<li>
									<Link data-toggle="tab" to="#vegetables">
										<img src="img/product/product-category-1.png" alt="Vegetables" />
										<span>Vegetables</span>
									</Link>
								</li>
								<li>
									<Link data-toggle="tab" to="#fruits">
										<img src="img/product/product-category-2.png" alt="Fruits" />
										<span>Fruits</span>
									</Link>
								</li>
								<li>
									<Link data-toggle="tab" to="#bread">
										<img src="img/product/product-category-3.png" alt="Bread" />
										<span>Bread</span>
									</Link>
								</li>
								<li>
									<Link data-toggle="tab" to="#juices">
										<img src="img/product/product-category-4.png" alt="Juices" />
										<span>Juices</span>
									</Link>
								</li>
								<li>
									<Link data-toggle="tab" to="#tea">
										<img src="img/product/product-category-5.png" alt="Tea" />
										<span>Tea</span>
									</Link>
								</li>
							</ul>
						</div>
						
						<div className="tab-content">
							<div role="tabpanel" className="tab-pane fade in active" id="all-products">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/14.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/17.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/15.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/22.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/20.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/23.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/30.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/21.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/6.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/3.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
							
							<div role="tabpanel" className="tab-pane fade" id="vegetables">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/14.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/26.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/31.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/38.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/21.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/6.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/3.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/20.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/23.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/15.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
							
							<div role="tabpanel" className="tab-pane fade" id="bread">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/14.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/17.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/15.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/22.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/20.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/23.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/30.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/21.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/6.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/3.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
							
							<div role="tabpanel" className="tab-pane fade" id="juices">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/14.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/17.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/15.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/22.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/20.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/23.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/30.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/21.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/6.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/3.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
							
							<div role="tabpanel" className="tab-pane fade" id="tea">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/14.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/17.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/15.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/22.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/20.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/23.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/30.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/21.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/6.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
											<Link to="/productDetails">
												<img src="img/product/3.jpg" alt="Product Image" />
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
											<Link className="add-to-cart" to="#">
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
		)
	}
}

module.exports = OurProducts;