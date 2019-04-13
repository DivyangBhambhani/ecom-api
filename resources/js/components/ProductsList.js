var React = require('react');
var Link = require('react-router-dom').Link;
var baseURL = 'http://localhost:8000/';
var Header = require('./common/Header');
var Footer = require('./common/Footer');
const api = require("../utils/api");
var ProductItem = require("./ProductItem");
var ProductItem_List = require("./ProductItem_List");
var Pagination = require('./common/Pagination');

const CheckBox = props => {
    return (
    	<li key={props.id}>
			<label className="check">
				<span className="custom-checkbox">
					<input key={props.id} type="checkbox" disabled={props.isDisabled} defaultChecked={props.isChecked} id={props.id} value={props.value} onClick={props.handleCheckChildElement} />
					<span className="checkmark"></span>
				</span>
				<Link to="#" className={props.isDisabled ? "inactiveFilterOption" : ""}>{props.value} ({props.stock})</Link>
			</label>
		</li>      
    )
}

class ProductsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      	products: [],
	      	currentPage:1,
	      	prodPerPage:9,
	      	categoryId:0,
	      	categoryName:'',
	      	flavorFilter: 	[
								{id: 1, name:"flavor", value:"Multigrain", isChecked:false, isDisabled:false},
								{id: 2, name:"flavor", value:"Chocolate", isChecked:false, isDisabled:false},
								{id: 3, name:"flavor", value:"Tooty Fruity", isChecked:false, isDisabled:false},
								{id: 4, name:"flavor", value:"Vanilla", isChecked:false, isDisabled:false},
								{id: 5, name:"flavor", value:"Spicy", isChecked:false, isDisabled:false},
								{id: 6, name:"flavor", value:"Sweet", isChecked:false, isDisabled:false},
								{id: 7, name:"flavor", value:"Mango", isChecked:false, isDisabled:false}
							],
			weightFilter: 	[
								{id: 1, name:"weight", value:"5 Kg", isChecked:false, isDisabled:false},
								{id: 2, name:"weight", value:"1 Kg", isChecked:false, isDisabled:false},
								{id: 3, name:"weight", value:"500 g", isChecked:false, isDisabled:false},
								{id: 4, name:"weight", value:"200 g", isChecked:false, isDisabled:false},
								{id: 5, name:"weight", value:"150 g", isChecked:false, isDisabled:false}
							],
			activeFilters: 	{
								checkedFlavors: [],
								checkedWeight: [] 
							},
			activeSorting: 5
	    }
	    this.handleCurrentPage = this.handleCurrentPage.bind(this);
	    this.handleGridList = this.handleGridList.bind(this);
	    this.updateProducts = this.updateProducts.bind(this);
	    this.sortProducts = this.sortProducts.bind(this);
	    this.handleChangeFilterCheckbox = this.handleChangeFilterCheckbox.bind(this);
	}

	componentDidMount() {
		var categoryInfo = this.decodeURItoCategoryInfo(this.props.match.params.categoryName);
		this.updateProducts(categoryInfo.id);
	}

	componentDidUpdate(prevProps, prevState) {
		// If category changes, display first page of product listing
		if (this.state.categoryId !== prevState.categoryId) {
			this.setState({ currentPage: 1 });
		}
	}

	componentWillReceiveProps(nextProps) {		
		if(JSON.stringify(this.props.match.params.categoryName) 
				!== JSON.stringify(nextProps.match.params.categoryName)) {
	        var categoryInfo = this.decodeURItoCategoryInfo(nextProps.match.params.categoryName);
	  		this.updateProducts(categoryInfo.id);
	    }
	}

	decodeURItoCategoryInfo(cat) {
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
    	var categoryId = categoryInfo.id;
		var categoryName = categoryInfo.name;
		this.setState({categoryId, categoryName});
    	return categoryInfo;
	}

	/* updateProducts(): 
			Updates product listing based on category and filters
	*/
	updateProducts(category) {
		// make a copy of activeFilters state
		var filters = this.state.activeFilters;
		// Pass category and filters to get products
		api.getProductByCategory(category, filters).then(function (res) {
			var products = res.data.map(obj => (obj));
			this.setState({ products }, function () {
				if (filters.checkedFlavors.length < 1 && filters.checkedWeight.length < 1) {
					this.updateFilters();
				}
				this.sortProducts();
			});
		}.bind(this));
	}

	/* updateFilters(): 
			Manages active and inactive filters and sort filters by "Active First"
			Active Filter: If the filter option exist in "In Stock" products, its marked as active
	*/
	updateFilters() {
		// create array of active flavors
		var active = [];
		this.state.products.map(function(item, index) {
			if(active.indexOf(item.flavor) === -1) {
				active.push(item.flavor);
			}
		});
		// Create array for active and inactive filters
		var activeFilterOptions = [];
		var inactiveFilterOptions = [];

		// Create copy of flavorFilter state
		var flavorFilter = this.state.flavorFilter;
		
		// Map all and disable filters not in activeFilter array
		flavorFilter.map(function (filter) {
			if (active.indexOf(filter.value) === -1) {
				filter.isDisabled = true;
				inactiveFilterOptions.push(filter);
			} else {
				activeFilterOptions.push(filter);
			}
		});		
		// Sort flavors: re-order filters based on disabled property
		flavorFilter = activeFilterOptions.concat(inactiveFilterOptions);

		// update filters state
		this.setState({ flavorFilter });
	}

	sortProducts(event) {
		// Get products to sort and sorting type id
		var products = this.state.products;
		var sortType = $('#sortProducts').val();

		if(sortType == 1) {
			products.sort(function (a,b) {
				return parseFloat(a.price) - parseFloat(b.price); // Prices: Low to High
			})
		} else if(sortType == 2) {
			products.sort(function (a,b) {
				return parseFloat(b.price) - parseFloat(a.price); // Prices: High to Low 
			})
		} else if(sortType == 3) {
			products.sort(function (a,b) {
				var _a = a.name.toLowerCase(); 
				var _b = b.name.toLowerCase();
			    return (_a < _b) ? -1 : (_a > _b) ? 1 : 0; // Product Name: A to Z
			});
		} else if(sortType == 4) {
			products.sort(function (a,b) {
				var _a = a.name.toLowerCase(); 
				var _b = b.name.toLowerCase();
				return (_a < _b) ? 1 : (_a > _b) ? -1 : 0; // Product Name: Z to A
			});
		} else {
			products.sort(function (a,b) {
				return parseFloat(b.rating) - parseFloat(a.rating); // Product Rating: Highest First
			})
		}
		this.setState({ products });
	}

	/* handleChangeFilterCheckbox()
			filters products based on filter checkboxes checked
	*/
	handleChangeFilterCheckbox(event) {
		// Create a copy of current state in variable
		var flavorFilter = this.state.flavorFilter;
		
		// Set "isChecked" property of currently checked filters in flavorFilter variable
		var checkedFlavors = [];
		flavorFilter.map(item => {
	       if (item.value === event.target.value) {	       		
	          	item.isChecked = event.target.checked
	       	}
	    })

	    // Update filters state
	    this.setState({ flavorFilter }, function () {
	    	// Push items with "isChecked: 1" in checkedFlavors array
	    	this.state.flavorFilter.map(function (item, index) {
				if(item.isChecked){
					checkedFlavors.push(item.value)
				}
			});
			// Update activeFilters and currentPage state
			this.setState({  
				currentPage: 1,
				activeFilters:{...this.state.activeFilters, checkedFlavors}
			}, function () {
				// Update products passing category id
				this.updateProducts(this.state.categoryId);
			});
	    })	    
	}

	handleCurrentPage(curPage) {
		this.setState({currentPage: curPage});
	}

	/* handleGridList(): Update List for Grid & List View */
	handleGridList(event) {
		var limit = event.target.id == 'listLink' ? 5 : 9;
		this.setState({
			prodPerPage: limit,
			currentPage: 1
		});		
	}

	render() {
		// Getting state
		const { products, currentPage, prodPerPage } = this.state;

		// Logic for displaying paginated products
	    const indexOfLastProd = currentPage * prodPerPage;
	    const indexOfFirstProd = indexOfLastProd - prodPerPage;
	    const currentProducts = products.slice(indexOfFirstProd, indexOfLastProd);
		return(
			<div className="container">
				<Header />
				<div id="content" className="site-content">
					<div id="breadcrumb">
						<div className="container">
							<h2 className="title">{this.state.categoryName}</h2>
							
							<ul className="breadcrumb">
								<li><Link to="#">Home</Link></li>
								<li><span>{this.state.categoryName}</span></li>
							</ul>
						</div>
					</div>
					<div className="home-1">
						<div className="container">
							<div className="row">
								<div className="container">
									<div className="col-md-10 col-sm-12 col-lg-10 col-lg-offset-1 col-md-offset-1">
										<div id="left-column" className="sidebar col-lg-3 col-md-3 col-sm-3 col-xs-12">
											<div className="block product-categories">
												<h3 className="block-title">Categories</h3>
												
												<div className="block-content">
													<div className="item">
														<span className="arrow collapsed" data-toggle="collapse" data-target="#flour" aria-expanded="false" role="button">
															<i className="zmdi zmdi-minus"></i>
															<i className="zmdi zmdi-plus"></i>
														</span>
														
														<Link className="category-title" to="#">Cooking and Baking Flour</Link>
														<div className="sub-category collapse" id="flour" aria-expanded="true" role="main">
															<div className="item">
																<Link to="#">Multigrain Flour</Link>
															</div>
															<div className="item">
																<Link to="#">Rice Flour</Link>
															</div>
															<div className="item">
																<Link to="#">Soya Flour</Link>
															</div>
															<div className="item">
																<Link to="#">Suji</Link>
															</div>
															<div className="item">
																<Link to="#">Besan</Link>
															</div>
														</div>
													</div>
													
													<div className="item">
														<span className="arrow collapsed" data-toggle="collapse" data-target="#biscuits" aria-expanded="false" role="button">
															<i className="zmdi zmdi-minus"></i>
															<i className="zmdi zmdi-plus"></i>
														</span>
														
														<Link className="category-title" to="#">Biscuits and Cookies</Link>
														<div className="sub-category collapse" id="biscuits" aria-expanded="true" role="main">
															<div className="item">
																<Link to="#">Dry Fruit Biscuit</Link>
															</div>
															<div className="item">
																<Link to="#">Coconut Biscuit</Link>
															</div>
															<div className="item">
																<Link to="#">Tooty Fruity Biscuit</Link>
															</div>
														</div>
													</div>
													
													<div className="item">
														<span className="arrow collapsed" data-toggle="collapse" data-target="#namkeens" aria-expanded="false" role="button">
															<i className="zmdi zmdi-minus"></i>
															<i className="zmdi zmdi-plus"></i>
														</span>
														
														<Link className="category-title" to="#">Namkeens</Link>
														<div className="sub-category collapse" id="namkeens" aria-expanded="true" role="main">
															<div className="item">
																<Link to="#">Chivda</Link>
															</div>
														</div>
													</div>
													
													<div className="item">
														<span className="arrow collapsed" data-toggle="collapse" data-target="#snacks" aria-expanded="false" role="button">
															<i className="zmdi zmdi-minus"></i>
															<i className="zmdi zmdi-plus"></i>
														</span>

														<Link className="category-title" to="#">Snacks</Link>
														<div className="sub-category collapse" id="snacks" aria-expanded="true" role="main">
															<div className="item">
																<Link to="#">Papad</Link>
															</div>
															<div className="item">
																<Link to="#">Noodles</Link>
															</div>
															<div className="item">
																<Link to="#">Golgappa</Link>
															</div>
														</div>
													</div>
													
													<div className="item">
														<span className="arrow collapsed" data-toggle="collapse" data-target="#desserts" aria-expanded="false" role="button">
															<i className="zmdi zmdi-minus"></i>
															<i className="zmdi zmdi-plus"></i>
														</span>

														<Link className="category-title" to="#">Desserts and Confectionaries</Link>
														<div className="sub-category collapse" id="desserts" aria-expanded="true" role="main">
															<div className="item">
																<Link to="#">Awla Sweet</Link>
															</div>
															<div className="item">
																<Link to="#">Awla Chatpata</Link>
															</div>
														</div>
													</div>

												</div>
											</div>
											<div className="block product-filter">
												<h3 className="block-title">Catalog</h3>
											
												<div className="block-content">
													<div className="filter-item">
														<h3 className="filter-title">Flavors</h3>
														<ul>
														{
													        this.state.flavorFilter.map((item) => {
													        	var i = 0;
													        	this.state.products.map(function(prod) {
													        		if(prod.flavor == item.value) {
														        		i++;
													        		}
													        	});
													        	return (
													        		<CheckBox key={item.id} stock={i} handleCheckChildElement={this.handleChangeFilterCheckbox} {...item} />
													        	)
													        })
												        }
												        </ul>
													</div>
													
													<div className="filter-item">
														<h3 className="filter-title">Manufacture</h3>
														
														<div className="filter-content">
															<ul>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Samsung <span className="quantity">(20)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Dell <span className="quantity">(14)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Polygon <span className="quantity">(8)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Newment <span className="quantity">(12)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Asus <span className="quantity">(15)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Mac <span className="quantity">(22)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Vaio <span className="quantity">(20)</span></Link>
																	</label>
																</li>
																<li>
																	<label className="check">
																		<span className="custom-checkbox">
																			<input type="checkbox" />
																			<span className="checkmark"></span>
																		</span>
																		<Link to="#">Lettuce <span className="quantity">(10)</span></Link>
																	</label>
																</li>
															</ul>
														</div>
													</div>
													
													
													<div className="filter-item">
														<h3 className="filter-title">By Flavor</h3>
														
														<div className="block-content">
															<div className="filter-color">
																<div className="left">
																	<div className="item">
																		<label className="color color-1"></label>
																		<span className="color-label">Blueberry</span>
																		<span>(3)</span>
																	</div>
																	<div className="item">
																		<label className="color color-3"></label>
																		<span className="color-label">Mango</span>
																		<span>(2)</span>
																	</div>
																	<div className="item">
																		<label className="color color-5"></label>
																		<span className="color-label">Strawberry</span>
																		<span>(2)</span>
																	</div>
																</div>
																<div className="right">
																	<div className="item">
																		<label className="color color-2"></label>
																		<span className="color-label">Grapes</span>
																		<span>(1)</span>
																	</div>
																	<div className="item">
																		<label className="color color-4"></label>
																		<span className="color-label">Almond</span>
																		<span>(3)</span>
																	</div>
																	<div className="item">
																		<label className="color color-6"></label>
																		<span className="color-label">Cherry</span>
																		<span>(10)</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="block tags product-tags">
												<h3 className="block-title">Product Tags</h3>
											
												<div className="block-content">
													<ul>
														<li><Link to="#">Hot Trend</Link></li>
														<li><Link to="#">Flour</Link></li>
														<li><Link to="#">200gm</Link></li>
														<li><Link to="#">500gm</Link></li>
														<li><Link to="#">1kg</Link></li>
														<li><Link to="#">Cookies</Link></li>
													</ul>
												</div>
											</div>
										</div>
										
										<div id="center-column" className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
											<div className="product-category-page">
												<div className="products-bar">
													<div className="row">
														<div className="col-md-6 col-xs-6">
															<div className="gridlist-toggle" role="tablist">
																<ul className="nav nav-tabs">
																	<li className="active">
																		<Link id="gridLink" to="#products-grid" onClick={this.handleGridList} data-toggle="tab" aria-expanded="true"><i className="fa fa-th-large"></i></Link></li>
																	<li><Link id="listLink" to="#products-list" onClick={this.handleGridList} data-toggle="tab" aria-expanded="false"><i className="fa fa-bars"></i></Link></li>
																</ul>
															</div>
															
															<div className="total-products">There are {this.state.products.length} products</div>
														</div>
														
														<div className="col-md-6 col-xs-6">
															<div className="filter-bar">
																<form action="#" className="pull-right">
																	<div className="select">
																		<select className="form-control" id="sortProducts" onChange={this.sortProducts}>
																			<option value="">Sort By</option>
																			<option value="1">Price: Low to High</option>
																			<option value="2">Price: High to Low</option>
																			<option value="3">Product Name: A to Z</option>
																			<option value="4">Product Name: Z to A</option>
																			<option value="5">Relevance</option>
																		</select>
																	</div>
																</form>
																{/*<form action="#" className="pull-right">
																	<div className="select">
																		<select className="form-control">
																			<option value="">Relevance</option>
																			<option value="1">Price: Lowest first</option>
																			<option value="2">Price: Highest first</option>
																			<option value="3">Product Name: A to Z</option>
																			<option value="4">Product Name: Z to A</option>
																			<option value="5">In stock</option>
																		</select>
																	</div>
																</form>*/}
															</div>
														</div>
													</div>
												</div>
												
												<div className="tab-content">
													<div className="tab-pane active" id="products-grid">
														<div className="products-block">
															<div className="row">
																{currentProducts.map((product, index) => (
																	<ProductItem 
																		key={index} 
																		id={product.id}
																		category={this.state.categoryId}
																		name={product.name}
																		rating={product.rating}
																		url = {this.props.location.pathname}
																		imgPath = {product.href.images_link}
																		effPrice={product.price} />)
																)}
															</div>
														</div>
													</div>
													
													<div className="tab-pane" id="products-list">
														<div className="products-block layout-5">
															{currentProducts.map((product, index) => (
																<ProductItem_List key={index} name={product.name} rating={product.rating} effPrice={product.price} />)
															)}
														</div>
													</div>
												</div>
												
												<div className="pagination-bar">
													<div className="row">
														<div className="col-md-4 col-sm-4 col-xs-12">
															<div className="text">Showing {indexOfFirstProd}-{indexOfLastProd} of {products.length} item(s)</div>
														</div>
														<div className="col-md-8 col-sm-8 col-xs-12">
															{products.length != 0 
																? <Pagination onPageChange={this.handleCurrentPage} itemPerPage={prodPerPage} items={products} currentPage={currentPage}/> 
																: 'No Products'}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

module.exports = ProductsList;