import React, {useRef,useEffect,useContext } from 'react'
import Recipe from './Recipe'
import {v4 as uuidv4} from "uuid"
import {MyContext} from "../App"

export default function PaypallPage(props) {

    const {back,setBack ,Recipes,setRecipes} = useContext(MyContext)
    const btn = useRef()

    useEffect(() => {
        console.log(window);
    window.paypal.Buttons({
        createOrder: (data,action)=>{
            return action.order.create({
                purchase_units: [
                    {
                      amount: {
                        value: "50",
                      },
                    },
                  ],
            })
        },
        onApprove:(data,action)=>{
            console.log(data,action)
            return action.order.capture()
        } ,
        onCancel:(data,action)=>{console.log(data,action)} 
    }).render(btn.current)
        
    }, [props.recipe])

    return (
        <div className="box">
            {back?  <div ref={btn} className="pay">
            <h3> THANK YOU FOR USING OUR BUFFET SERVICE </h3>
            <h4> Price: 50 €  Per Person </h4>
        </div>: Recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />) }
            
        </div>
        
    )
}
