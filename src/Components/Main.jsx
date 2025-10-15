import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../Ai";

function Main() {

    const [ingredients, setingredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)


    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);

    }

    function handleIngredients(formData) {
        const action = formData.get("action");
        const newIng = formData.get("ingredient")

        if (action === "add" && newIng) {
            setingredients(prev => [...prev, newIng]);
        } else if (action === "remove") {
            setingredients(prev => prev.slice(0, -1));
        }
    }

    React.useEffect(() => {
        if (ingredients.length < 4) {
            setRecipe(false);
        }
    }, [ingredients]);





    return (
        <main>
            <form action={handleIngredients} className="add-ingredient-form">
                <input
                    aria-label="Add Ingredient"
                    placeholder="Ex: Cheese"
                    type="text"
                    name="ingredient"
                />
                <div>
                    <button className="addbtn" type="submit" name="action" value="add">Add Ingredient</button>
                    <button className={`rembtn ${ingredients.length === 0 ? "inactive" : ""}`} type="submit" name="action" value="remove">Remove Ingredients</button>
                </div>
            </form>
            <br />
            <br />
            {ingredients.length > 0 ?
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                /> : null}
            {recipe ? <ClaudeRecipe
                recipe={recipe}
                ref={recipeSection}
            /> : null}
        </main>
    )
}

export default Main