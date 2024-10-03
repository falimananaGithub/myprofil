import React from 'react';
import { BsFillSearchHeartFill } from "react-icons/bs";
const Search = () => {
    return (
        <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><BsFillSearchHeartFill /></a>
            </div>
        </div>
    );
};

export default Search;