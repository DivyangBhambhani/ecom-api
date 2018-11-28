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

// var Nav = require('./Nav');
var Home = require('./components/Home');
var About = require('./components/About');

ReactDOM.render(
    <Router>
    	<div className="container">    		
	        <Route path="/" exact component={Home}></Route>
	        <Route path="/home" component={Home}></Route>
	        <Route path="/about" component={About}></Route>
        </div>
    </Router>, document.getElementById('app'));
