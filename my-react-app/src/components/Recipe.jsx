function Recipe(props) {
    return (
    <div id='recipe'>
        <div id='title'>
            <h2>{ props.name }</h2>
        </div>
        <div id="ingredients-instructions">
            <div id='ingredients'>
                <h3>Ingredients</h3>
                <ul>
                    { props.ingredients.map( ingredient  => <li>{ ingredient }</li> ) }
                </ul>
            </div>
            
            <div id='instructions'>
                <h3>Instructions</h3>
                <ol>
                    { props.instructions.map( instruction => <li>{ instruction }</li> ) }
                </ol>
            </div>
        </div>
    </div>
    );
}

export default Recipe;