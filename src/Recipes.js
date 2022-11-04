export default function Recipes(props){
    const {item, title, ingredients, time, steps } = props;

    return (
        <div className="Receita">
        <p> {item}</p>
        <h1>{title}</h1>
        <h2>ingredients: {ingredients}</h2>
        <h3> Tempo estimado :{time}</h3>
        <h4>Passos: {steps}</h4>
        </div>
    )
}