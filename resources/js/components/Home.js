var React = require('react');
var Nav = require('./Nav');
class Home extends React.Component {
	render() {
		return(
			<div className="container">
				<Nav />
                <div className="col-md-12 text-center">
                    <h3 className="title">Home Page</h3>
                </div>                
            </div>
		)
	}
}

module.exports = Home;

