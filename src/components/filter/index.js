import React,{Component} from "react";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './index.scss';
class Filter extends Component {
    constructor(props) {
      super(props);
        this.state = {
            value: 1,
            value1: {
                min: 0,
                max: 10000,
            },
        };
    }
    render() {
        return (
            <form className="filter-form">
                <InputRange
                draggableTrack
                maxValue={10000}
                minValue={0}
                onChange={value => this.setState({ value1: value })}
                //   onChangeComplete={value => console.log(value)}
                value={this.state.value1} />
            </form>
        );
    }
}
export default Filter;