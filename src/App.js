import React from "react";
import ReactDOM from "react-dom";
import {Route, HashRouter as Router} from 'react-router-dom';
import App from "../src/container/homepage";
import Cart from "../src/container/cart";
import './index.scss';
const routing = (
    <Router>
      	<div>
        	<Route exact path="/" component={App} />
        	<Route path="/cart" component={Cart} />
      	</div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));