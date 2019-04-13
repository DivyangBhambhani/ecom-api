var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
const api = require("../utils/api");

class ProductItem extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			product: [],
			productImages: ''
		}
	}
	
	componentDidMount() {
		// Block of code
		api.getImagesByProduct(this.props.imgPath)
			.then(function (productImages) {
				console.log('count');
				// $('.product-item .product-image img').attr('src',"data:image/png;base64," + productImages[0].image)
				// img = "data:image/png;base64," + productImages[0].image;
				if(typeof productImages[0] != "undefined") {
					this.setState({
						productImage: "data:image/png;base64," + productImages[0].image
					});
				}
			}.bind(this));
	}

	render() {
		
		// var imgSrc =  ?  : "";
		/* Rounding rating to nearest 0.5 step - 
			Loop value of fullstar to render full stars and use halfStar to render half star */		
		// var rating = Math.round(this.props.rating*2)/2;
		// var fullStar = Math.trunc(rating);
		// if((rating / 1) == 0.5) {
		// 	console.log('halfStar');
		// }
		
		return(
			<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">				
				<div className="product-item">
					<div className="product-image">
						<Link to={this.props.url + "/" + this.props.id}>
							<img className="img-responsive" src={this.state.productImage} alt="Product Image" />
						</Link>
					</div>
					
					<div className="product-title">
						<Link to={this.props.url + "/" + this.props.id}>
							{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
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
						<span className="sale-price">₹{this.props.effPrice}</span>
						<span className="base-price">₹{this.props.effPrice}</span>
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
		)
	}
}

module.exports = ProductItem;