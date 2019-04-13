/**
* Loading Our Dependencies
*/
require('./dependencies');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var React = require('react');
var ReactDOM = require('react-dom');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Switch = require('react-router-dom').Switch;

var Home = require('./components/Home');
var About = require('./components/About');
var Contact = require('./components/Contact');
var ProductsList = require('./components/ProductsList');
var GluttenFreeProducts = require('./components/GluttenFreeProducts');
var ShoppingCart = require('./components/ShoppingCart');
var Checkout = require('./components/Checkout');
var ProductDetails = require('./components/ProductDetails');
var NoMatch = require('./components/NoMatch');

ReactDOM.render(
    <Router>
    	<div className="row">    		
	        <Switch>
		        <Route path="/" exact component={Home}></Route>
		        <Route path="/home" component={Home}></Route>
		        <Route path="/about" component={About}></Route>
		        <Route path="/contact" component={Contact}></Route>
		        <Route path="/glutten_free_products" exact component={GluttenFreeProducts}></Route>
		        <Route path="/glutten_free_products/:categoryName" exact component={ProductsList}></Route>
		        <Route path="/shoppingCart" component={ShoppingCart}></Route>
		        <Route path="/checkout" component={Checkout}></Route>
		        <Route path="/category/:id/products" component={ProductsList}></Route>
		        <Route path="/glutten_free_products/:categoryName/:productId" component={ProductDetails}></Route>
		        <Route component={NoMatch}></Route>
	        </Switch>
        </div>
    </Router>, document.getElementById('app'));
