var React = require('react');
var ReactDOM = require('react-dom');

const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Switch = require('react-router-dom').Switch;

// var Nav = require('./Nav');
var Home = require('./Home');
var About = require('./About');

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route render = {() => (<p>Not Found</p>)}  />
                    </Switch>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}

module.exports = Main;