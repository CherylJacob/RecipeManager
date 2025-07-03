import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import Navbar from "./components/Navbar";
import './styles.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;