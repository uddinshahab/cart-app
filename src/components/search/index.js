import React from 'react';
import SearchIcon from '../../icons/search';
import './index.scss';
const Search = (props) =>{
    return(
        <div className="search">
            <input type="text" placeholder="Search" />
            <SearchIcon className="search-icon" />
        </div>
    )
}
export default Search;