import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import React, { useState } from 'react';
import recipes from './data/recipe';

import './styles.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

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
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;