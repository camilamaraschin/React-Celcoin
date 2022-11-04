import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipes from "./Recipes";

export default function HomePage(props) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URI}/recipes`);
    promise.then(response => {
      setRecipes(response.data);
    });
    promise.catch(e => {
      console.log("Pagina não encontrada", e)
    })
  }, []);

  function buildRecipes() {
    if (!recipes) return <h1>Carregando...</h1>
    return recipes.map(recipe => {
      const url = `/products/${recipe.id}`;
      return (
        <li><Link to={url}>{recipe.item}</Link></li>
      )
    })
  }

  const recipesComponent = buildRecipes();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {recipesComponent}
      </ul>
    </div>
  )
}