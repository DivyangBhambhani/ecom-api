var axios = require("axios");

module.exports = {
	
	getAllProducts: function () {
		console.log('here');
	  	return axios.get(`http://localhost:8000/api/products`)
	    .then((products) => (products.data));
	}
	
}