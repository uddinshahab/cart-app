import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../../icons/cart';
import './index.scss';
const Cart = (props) =>{
    return(
        <Link to="/cart" className="cart">
            <CartIcon className="cart-icon" />
            <em className="badge">{props.count}</em>
        </Link>
    )
}
export default Cart;