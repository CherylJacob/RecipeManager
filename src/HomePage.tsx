import { Link } from "react-router-dom";
import './styles.css';

interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
    steps: string[];
}

interface HomePageProps {
    recipes: Recipe[];
}
const HomePage: React.FC<HomePageProps> = ({ recipes }) => {
    if (recipes.length === 0) {
        return (
            <div className="empty-message">
                <img
                    src="assets/sadfood.png"
                    alt="No recipes found"
                    className="empty-image"
                />
                <p>Your recipe book is feeling empty...<br />Let's cook something amazing!</p>
            </div>

        );
    }
    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`} state={{ recipe }} className="recipe-card">
                    <img src={recipe.image} alt={recipe.title} />
                    <h2>{recipe.title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default HomePage;