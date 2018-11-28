
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
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
var Nav = require('./components/Nav');

ReactDOM.render(
    <Router>
    	<div className="container">
    		<Nav />
	        <Route path="/" exact component={Home}></Route>
	        <Route path="/home" component={Home}></Route>
	        <Route path="/about" component={About}></Route>
        </div>
    </Router>, document.getElementById('main'));
