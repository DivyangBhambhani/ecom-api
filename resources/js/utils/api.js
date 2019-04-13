var axios = require("axios");

module.exports = {
	
	getAllProducts: function () {
	  	return axios.get(`http://localhost:8000/api/products`)
	    .then((products) => (products.data));
	},

	getProductDetails: function (categoryID, productID) {
	  	return axios.get(`http://localhost:8000/api/category/${categoryID}/products/${productID}`)
	    .then((productDetails) => (productDetails.data.data));
	},

	getProductByCategory: function (categoryID,filters) {
		if(filters.checkedFlavors.length > 0) {
			filteredFlavor = JSON.stringify(filters.checkedFlavors);
			var url = `http://localhost:8000/api/category/${categoryID}/products?flavor=${filteredFlavor}`
		} else {
			var url = `http://localhost:8000/api/category/${categoryID}/products`;
		}
		return axios.get(url).then((products) => (products.data));
	},

	getReviewsByProduct: function (categoryID, productID) {
	console.log('in getReviewsByProduct');		
		return axios.get(`http://localhost:8000/api/category/${categoryID}/products/${productID}/reviews`)
	    .then((reviews) => (reviews.data.data));
	},

	getImagesByProduct: function (url) {
	console.log('in getImagesByProduct');		
		return axios.get(`${url}`)
	    .then((images) => (images.data.data));
	}
	
}