import React from 'react'
import {v4 as uuidv4} from  "uuid"

export default function ingredientSpecs(props) {
    return (
        <div className="ingredient">
            {props.ingredients.map(ingredient=>{
                return(
                    <ul className="ing-list" key={uuidv4()} >
                        <li className="ing-text">
                            {ingredient.text}
                        </li>
                        <li className="ing-weight">
                            {ingredient.weight}
                        </li>
                    </ul>
                )
            }) }
        </div>
    )
}
