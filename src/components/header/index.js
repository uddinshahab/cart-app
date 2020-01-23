import React from "react";
import Search from '../search';
import Cart from '../cart';
import StarIcon from '../../icons/star';
import './index.scss';

const Header = (props) =>{
    return(
        <header id="header">
            <a href="#/" className="logo"><StarIcon /></a>
            <aside>
                <Search />
                {props.isCart ? <Cart count={props.count} /> : null }
            </aside>
        </header>
    )
}
export default Header;