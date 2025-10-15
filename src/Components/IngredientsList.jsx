import React from "react"

function IngredientsList(props){
    const ingredientList = props.ingredients.map(ing => (
        <li key={ing}>{ing}</li >
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
            {props.ingredients.length > 3 ? <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button
                    onClick={props.getRecipe}>Get a recipe
                </button>
            </div> : null}
        </section>
    )
};

export default IngredientsList