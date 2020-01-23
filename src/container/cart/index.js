import React, { Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.scss';
class Cart extends Component {
    constructor(props){
    super(props);
        this.state = {
            count: 1
        }
    }
    handleAddItem = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleRemoveItem = () =>{
        this.setState(prevState => 
            ({
                count: Math.max(prevState.count - 1, 1)
            })
        )
    }
    render(props){
        return(
            <div id="wrapper">
                <Header />
                <div className="content-container">
                    <div className="cart-list">
                        <div className="cart-list__item">
                            <figure>Img</figure>
                            <div className="item-details">
                                <div className="item-desc">
                                    <h3>Item 1</h3>
                                    <p>&#8377; 319 <span>&#8377; 900</span> <strong>64% Off</strong></p>
                                </div>
                                <div className="item-val">
                                    <span onClick={this.handleRemoveItem}>-</span>
                                    <em>{this.state.count}</em>
                                    <span onClick={this.handleAddItem}>+</span>
                                </div>
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>

                    <aside className="cart-details">
                        <h4>Price Details</h4>
                        <ul className="">
                            <li>
                                <label>Price (1 Item) <em>:</em> </label>
                                <span>&#8377; 900</span>
                            </li>
                            <li>
                                <label>Discount <em>:</em> </label>
                                <span>&#8377; 579</span>
                            </li>
                            <li>
                                <label>Total Payment</label>
                                <span>&#8377; 319</span>
                            </li>
                        </ul>
                    </aside>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Cart;