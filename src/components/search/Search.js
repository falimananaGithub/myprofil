import React, { useState } from 'react';
import { BsFillSearchHeartFill } from "react-icons/bs";
const Search = (props) => {
    const [css, setCss] = useState("");
    const setTarget = (value) => {
        props.setSearch(value);
    };
    const setStyle = () => {
        setCss("search_input");
    }
    return (
        <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..." onChange={(e) => setTarget(e.target.value)} onBlur={setStyle} />
                <a href="#" className="search_icon"><BsFillSearchHeartFill /></a>
            </div>
        </div>
    );
};

export default Search;