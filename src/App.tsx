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
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query.toLowerCase());
    };

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
            <Header onSearch={handleSearch} />
            <Navbar />
            <div className="background-container">
                <Routes>
                    <Route path="/" element={<HomePage recipes={filteredRecipes} />} />
                    <Route path="/recipe/:id" element={<RecipePage/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;