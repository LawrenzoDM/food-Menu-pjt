import React,{useEffect,useState,useContext} from 'react'
//import { useParams } from 'react-router-dom';
import { MyContext } from '../../App';




export default function OfferUser() {
    const {setChefUid, chefUId}=useContext(MyContext)
    //const { chefId } = useParams();

    const [chefDish,setChefDish] = useState([])
    //const [show,setShow]=useState(false)
    console.log(chefUId);

    useEffect(() => {
       
        fetch("http://localhost:5000/dishes")
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
    
            setChefDish(result.dishes)
          } else {
            console.log(result.message);
          }
        })

        .catch((err) => console.log(err));

  }, [])

    

    return (
        <div>
            <h1>OFFERS</h1>
            <div className="dishCat">
                {chefDish.map((dish)=>{
                    //console.log(dish.chefId);
                 if (dish.chefId === chefUId) {
                
                    return(
                <div style={{width:"250px", height:"300"}} >
                    <h1>{dish.category}</h1>
                    
                    <div className="dishCd">
                         <h1>{dish.name}</h1>
                        <img src={dish.img} alt="" width="200" height="200" />
                        <h3>{dish.price}</h3>
                        <div className="tapBtn">
                            <button>Order</button>
                            <button>Rate</button>
                        </div>
                    </div>
                </div>
                )
             } 
                })}
            </div>
        </div>
    )
}
