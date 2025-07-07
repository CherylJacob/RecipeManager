import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import type { Recipe } from './types';

function App() {
    const [searchInputValue, setSearchInputValue] = useState(''); // New state for input value

    const handleSearch = (query: string) => {
        setSearchInputValue(query); // Update input display
        setSearchQuery(query.toLowerCase()); // Update filter
    };

    const resetSearch = () => {
        setSearchQuery('');
        setSearchInputValue(''); // Clear the input field
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery)
    );

    return (
        <>
            <div className="background-overlay"></div>
            <Header onSearch={handleSearch} searchValue={searchInputValue}/>
            <Navbar onHomeClick={resetSearch} />
            <div className="background-container">
                <Routes>
                    <Route path="/" element={<HomePage recipes={filteredRecipes} onBackClick={resetSearch} />} />
                    <Route path="/recipe/:id" element={<RecipePage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;