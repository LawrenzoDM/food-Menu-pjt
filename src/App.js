import React,{useState, createContext} from "react"
import "./App.css"
import Axios from "axios"
import Recipe from "./Components/Recipe"
import {v4 as uuidv4} from "uuid"
import Notfound from "./Components/Notfound"

export const MyContext = createContext(null)

function App() {

  const [menu ,setMenu]=useState("")
  const [Recipes,setRecipes]= useState([])
  const [alert,setAlert]= useState("")
  const [back,setBack]=useState(true)
 
  

  const url = `https://api.edamam.com/search?q=${menu}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`

 

  const getData=() => {

    if (menu !=="") {
      Axios.get(url)
      .then(result=> {
        if (!result.data.more) {
          return setAlert("Food Type Not Found")
        }
        setRecipes(result.data.hits)
        console.log(result)
      })
      setAlert("")
      setMenu("") 
      setRecipes([])
      
    
    } else {
      setAlert("please fill the form")
    }
  }

  const onSubmit =(e)=>{
    e.preventDefault()
    getData()
  }
  
  const onChange = (e)=>{
    setMenu(e.target.value);
  }


  return (
    <MyContext.Provider value={{menu,Recipes,alert,back,setMenu,setRecipes,setAlert,setBack }} >
    <div className="App">
      <h1> Today's Buffet Food Search </h1>
      <form className="search-form" onSubmit={onSubmit} >
        {alert !=="" && <Notfound alert={alert}/>}
        <input type="text" placeholder="search food" autoComplete="off" onChange={onChange} value={menu}/>
        <input type="submit" value="search"/>
      </form>
      <div className="recipes">
        {Recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
