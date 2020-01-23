import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import App from "../src/container/homepage";
import Cart from "../src/container/cart";
const routing = (
    <Router>
      	<div>
        	<Route exact path="/" component={App} />
        	<Route path="/cart" component={Cart} />
      	</div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));