var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class Review extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		/* Rounding rating to nearest 0.5 step - 
			Loop value of fullstar to render full stars and use halfStar to render half star */		
		var rating = Math.round(this.props.reviewData.rating*2)/2;
		var fullStar = [];
		for (var i = 0; i < Math.trunc(rating); i++) {
			fullStar.push(<div key={i} className="star on"></div>)
		}
		return(
			<div className="item">
				<div className="comment-left pull-left">
					<div className="avatar">
						<img src={baseURL + "img/avatar.jpg"} alt="" width="70" height="70" />
					</div>
					<div className="product-rating">
						{fullStar}
					</div>
				</div>
				<div className="comment-body">
					<div className="comment-meta">
						<span className="author">{this.props.reviewData.customer}</span> - 
						<span className="time">{this.props.reviewData.reviewDate}</span>
					</div>
					<div><b>{this.props.reviewData.title}</b></div>
					<div className="comment-content">{this.props.reviewData.description}</div>
				</div>
			</div>
		)
	}
}

module.exports = Review;