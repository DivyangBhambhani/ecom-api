var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';

class LoadFlavorFilters extends React.Component {
	constructor(props) {
		super(props);		
	}

	render() {
		var allOptions = ["Multigrain", "Chocolate", "Tooty Fruity", "Vanilla", "Spicy", "Sweet", "Mango"];
		var active = [];
		this.props.products.map(function(item, index) {
			if(active.indexOf(item) === -1) {
				active.push(item.flavor);
			}
		})
		return(
			<div className="filter-content">
				<ul>
					{
						allOptions.map(function(item, index) {
							if (active.indexOf(item) !== -1) {
								return(
									<li key={index}>
										<label className="check">
											<span className="custom-checkbox">
												<input type="checkbox" id={item} value={item} onChange={this.handleChange} />
												<span className="checkmark"></span>
											</span>
											<Link to="#">{item}</Link>
										</label>
									</li>
								)
							}
						})
					}
					{
						allOptions.map(function(item, index) {
							if (active.indexOf(item) === -1) {
								return(
									<li key={index}>
										<label className="check">
											<span className="custom-checkbox">
												<input type="checkbox" disabled id="" />
												<span className="checkmark"></span>
											</span>
											<Link to="#" className="inactiveFilterOption">{item}</Link>
										</label>
									</li>
								)
							}
						})
					}
				</ul>
			</div>
		)
	}	
}

module.exports = LoadFlavorFilters;