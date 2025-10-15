import ReactMarkDown from "react-markdown"
import React from "react"

const ClaudeRecipe = React.forwardRef((props, ref) => {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2 ref={ref}>Your AI Chef Recommends:</h2>
            <ReactMarkDown>
                {props.recipe}
            </ReactMarkDown>
        </section>
    )
})

export default ClaudeRecipe