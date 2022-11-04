import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Recipes from "./Recipes";


export default function Itens() {
    const [recipe, setRecipes] = useState()
    const params = useParams();
    const navigate = useNavigate();
    
    function handleBack() {
        navigate("/");
    }

    useEffect(() => {
        const promise = axios.get("http://localhost:1234/recipes");
        promise.then(response => {
            setRecipes(response.data);
        })
    }, []);

    function buildDescription() {
        if (!passo) return <h1>Carregando...</h1>
        return passo.map(recipe => {
            const url = `/recipes/${recipe.id}`;
            return (
                <Receita
                  title = {recipe.title}
                   time = {recipe.time}
                   ingredients = {recipe.ingredients}
                   steps = {recipe.steps}
                   />

            )
        })
    }
    const PassosComponent = buildDescription();
    return (
        <div className="HomePage">
            <ul>
                {PassosComponent}  
            </ul>
            <button onClick={handleBack}>Voltar</button>
        </div>
    )
}