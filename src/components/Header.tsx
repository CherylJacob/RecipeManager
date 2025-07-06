import "./Header.css"; // Create this for styling
import React, { useState } from 'react';

interface HeaderProps {
    onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm('');
    }; return (
        <header className="header">
            <div className="header-buttons">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>
                <button className="header-button">Login</button>
                <button className="header-button">Add Recipe</button>
            </div>

        </header>
    );
};

export default Header;