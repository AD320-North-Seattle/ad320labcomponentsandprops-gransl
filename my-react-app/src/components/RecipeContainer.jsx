import Recipe from './Recipe.jsx';

function RecipeContainer(props) {
    return (
        <div id="recipe-container">
            <h1>Recipe Book!</h1>
            { props.recipeBook.map( recipe => <Recipe name={ recipe.name } ingredients={ recipe.ingredients } instructions={ recipe.instructions } />)}
        </div>      
    );
}

export default RecipeContainer;