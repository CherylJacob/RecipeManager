import "./Header.css"; // Create this for styling
import React from 'react';

interface HeaderProps {
    onSearch: (query: string) => void;
    searchValue: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch , searchValue }) => {

    return (
        <header className="header">
            <div className="header-buttons">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchValue}
                    onChange={(e) => onSearch(e.target.value)}
                    className="search-input"
                />
                <button className="header-button">Login</button>
                <button className="header-button">Add Recipe</button>
            </div>

        </header>
    );
};

export default Header;