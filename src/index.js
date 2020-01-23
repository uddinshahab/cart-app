import React from "react";
import ReactDOM from "react-dom";
import {Route, HashRouter as Router} from 'react-router-dom';
import './index.scss';
import Hpage from "../src/container/homepage";
import Cart from "../src/container/cart";
const App = (
    <Router>
      	<div>
        	<Route exact path="/" component={Hpage} />
        	<Route path="/cart" component={Cart} />
      	</div>
    </Router>
)
ReactDOM.render(App, document.getElementById('root'));

