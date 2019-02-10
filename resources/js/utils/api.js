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

	getProductByCategory: function (categoryID,filters) {
		if(filters.checkedFlavors.length > 0) {
			filteredFlavor = JSON.stringify(filters.checkedFlavors);
			var url = `http://localhost:8000/api/category/${categoryID}/products?flavor=${filteredFlavor}`
			console.log(url);
		} else {
			var url = `http://localhost:8000/api/category/${categoryID}/products`;
		}
		return axios.get(url).then((products) => (products.data));
	}
	
}