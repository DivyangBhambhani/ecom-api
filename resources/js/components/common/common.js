module.exports = {
	decodeURItoCategoryInfo(cat, setState) {
		var categoryInfo = {};
        var category = cat;
    	switch(category){
    		case "cooking-and-baking-flour":
    			categoryInfo = {id:1, name:"Cooking and Baking Flour"};
    			break;
    		case "biscuits-and-cookies":
    			categoryInfo = {id:2, name:"Biscuits and Cookies"};
    			break;
    		case "namkeens":
    			categoryInfo = {id:3, name:"Namkeens"};
    			break;
    		case "snacks":
    			categoryInfo = {id:4, name:"Snacks"};
    			break;
    		case "desserts-and-confectionaries":
    			categoryInfo = {id:5, name:"Desserts and Confectionaries"};
    			break;  	
    	}    	
		setState(categoryInfo);
    	return categoryInfo;
	}
}