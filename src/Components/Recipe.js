import React,{useState ,useContext} from 'react'
import IngredientSpecs from "./ingredientSpecs"
import PaypallPage from './PaypallPage';
import {MyContext} from "../App"

const Recipe = ({recipe}) => {
    const context = useContext(MyContext)
    const [show,setShow] =useState(false)
    const {label,image,url, ingredients} = recipe.recipe;
    const [buy ,setBuy]= useState(false)

    return (
        <div className="recipe">
            {buy? <PaypallPage recipe={recipe} /> : <div >
            <h2>{label} </h2>
            <img src={image} alt={label} />
            <div><a href={url} target="blank" >check more</a></div>
            <div><button onClick={()=> setShow(!show )} >Ingredients</button></div>
            {show && <IngredientSpecs ingredients={ingredients} />} 
            </div>}
            <div className="btn">
                <button onClick={()=> setBuy(!buy)}>{buy? "Back" :"Order"} </button>
            </div>
        </div>
    )
}

export default Recipe

