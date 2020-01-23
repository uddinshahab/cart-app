import React, {Component} from 'react';
import Header from '../../components/header';
import ShoppingList from '../../components/shoppingList';
import Filter from '../../components/filter';
import Footer from '../../components/footer';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            count: 0
        };
    }
    handleAddItem = () => {
        this.setState({ count: this.state.count + 1 });
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSize);
    }
    handleWindowSize = () => {
        this.setState({ width: window.innerWidth });
    }
    render(){
        const { width } = this.state;
        const isMobile = width >= 1024;
        return(
            <div id="wrapper">
                <Header isCart count={this.state.count} />
                <div className="content-container">
                    {isMobile ? 
                        <div className="filter"><Filter /></div>
                        :
                        null
                    }
                    <ShoppingList onclick = {this.handleAddItem} />
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;