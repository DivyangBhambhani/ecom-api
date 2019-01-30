var axios = require("axios");

module.exports = {
	
	getAllProducts: function () {
	  	return axios.get(`http://localhost:8000/api/products`)
	    .then((products) => (products.data));
	},

	getProductDetails: function (productID) {
	  	return axios.get(`http://localhost:8000/api/products/${productID}`)
	    .then((productDetails) => (productDetails.data.data));
	},

	getProductByCategory: function (categoryID) {
		return axios.get(`http://localhost:8000/api/category/${categoryID}/products`)
	    .then((products) => (products.data));
	}
	
}