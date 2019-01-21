var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class ProductItem_List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
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
									{this.props.name}
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
								<span className="sale-price">₹{this.props.effPrice}</span>
								<span className="base-price">₹{this.props.effPrice}</span>
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
		)
	}
}

module.exports = ProductItem_List;