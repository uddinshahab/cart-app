import React, { Component } from 'react';
import Modal from '../modal';
import Filter from '../../components/filter';
import SortIcon from '../../icons/sort';
import './index.scss';
class Sorting extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSize);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSize);
    }
      
    handleWindowSize = () => {
        this.setState({ width: window.innerWidth });
    };
      
    showModal = (modal) => {
        this.setState({
          [modal]: true
        });
    }
    closeModal = (modal) => {
        this.setState({
          [modal]: false
        });
    }
    
    render(props){
        const { width } = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return(
                <div className="sort">
                    <a href="#" onClick={e=>this.showModal('sortModal')}><SortIcon /> Sort</a>
                    <a href="#" onClick={e=>this.showModal('filterModal')}><SortIcon /> Filter</a>
                    { this.state.sortModal ? <div onClick={e=>this.closeModal('sortModal')} className="modal-back-drop"></div> : null }
                    { this.state.filterModal ? <div onClick={e=>this.closeModal('filterModal')} className="modal-back-drop"></div> : null }
                    <Modal
                    isTitle
                    title="Sort Option"
                    show={this.state.sortModal}
                    close={e=>this.closeModal('sortModal')}>
                        <ul>
                            <li className={`${this.props.activeState === 0 ? "active" : ""}`} onClick={this.props.sortPriceHigh}><label><input type="radio" name="r1" /> Price -- High Low</label></li>
                            <li className={`${this.props.activeState === 1 ? "active" : ""}`} onClick={this.props.sortPriceLow}><label><input type="radio" name="r1" />  Price -- Low High</label></li>
                            <li className={`${this.props.activeState === 2 ? "active" : ""}`} onClick={this.props.sortDiscount}><label><input type="radio" name="r1" />  Discount</label></li>
                        </ul>
                    </Modal>
                    
                    <Modal
                    isTitle
                    title="Filter Option"
                    show={this.state.filterModal}
                    close={e=>this.closeModal('filterModal')}>
                        <Filter />
                    </Modal>
                </div>
            );
        }
        else{
            return(
                <div className="sort">
                    <label>Sort By</label>
                    <ul>
                        <li className={`${this.props.activeState === 0 ? "active" : ""}`} onClick={this.props.sortPriceHigh}>Price -- High Low</li>
                        <li className={`${this.props.activeState === 1 ? "active" : ""}`} onClick={this.props.sortPriceLow}>Price -- Low High</li>
                        <li className={`${this.props.activeState === 2 ? "active" : ""}`} onClick={this.props.sortDiscount}>Discount</li>
                    </ul>
                </div>
            )
        }
    }
}
export default Sorting;