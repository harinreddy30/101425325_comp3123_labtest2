import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setCity(input.trim());
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city name"
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
