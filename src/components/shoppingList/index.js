import React, { Component } from 'react';
import Sorting from '../sort';
import './index.scss';
class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
            isLoaded: false,
            data: [],
            isActive: 0,
      };
    };
    compareBy = (key, order = 'asc', index) =>{
        return function(a,b){
            let res = 0;
            if(a[key] > b[key]){
                res = 1;
            }else if(a[key] < b[key]){
                res = -1;
            }
            return(
                (order === 'desc') ? (res * -1) : res
            );
        }
    }
    sortBy = (key, order, index) =>{
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key, order));
        this.setState({
            data: arrayCopy,
            isActive: index
        });
    }
    componentDidMount() {
        fetch("https://api.myjson.com/bins/qzuzi")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                isLoaded: true,
                data: result
            });
            }
        )
    }
    render(props) {
        const { isLoaded, data } = this.state;
        if (!isLoaded) {
          return <h5 className="loading-msg">Loading...</h5>;
        } else {
          return (
            <section className="content">
                <Sorting activeState={this.state.isActive} 
                    sortPriceHigh={() => this.sortBy('price', 'asc', 0)}
                    sortPriceLow={() => this.sortBy('price', 'desc', 1)} 
                    sortDiscount={() => this.sortBy('discount', 'asc', 2)} 
                />
                <div className="content-box">
                    {data.map(item => (
                        <div className="content-list" key={item.id}>
                            <img src={item.img_url} alt={item.name} />
                            <label>{item.name}</label>
                            <p>
                                &#8377;{Math.ceil(item.price - item.discount)} 
                                <span>{item.price}</span> 
                                <strong>
                                    {Math.ceil((item.price - item.discount) * 100 / item.price)}%
                                </strong>
                            </p>
                            <button onClick={this.props.onclick}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>
          );
        }
    }
}
export default ShoppingList;