
import RestaurantCard  from "./RestaurantCard"
import { useState } from "react"

//the cards component uses hard coded data from the swiggy api. We should NEVER keep this hard coded data in components folder.

 import resObj from "../utils/mockData"
const Body = () => {

  const[ListOfRestaurants, setListOfRestaurants] = useState(resObj)
        
 
    return(
        <div className="body">
            <div className="filter-btn">

                <button className="fil-btn" onClick={()=>{const filteredList = ListOfRestaurants.filter((res)=>res.data.avgRating>4) 
                
       console.log(ListOfRestaurants)
            setListOfRestaurants(filteredList)
                
                }}>Filter Restaurants</button>
                
            </div>

            <div className="res-container">

            {/* earlier, we defined the restaurant cards in this way which looks a little ugly.. */}
            {/* <RestaurantCard resData={resObj[0]}/>
            <RestaurantCard resData={resObj[1]}/>
            <RestaurantCard resData={resObj[2]}/>
            <RestaurantCard resData={resObj[3]}/>
            <RestaurantCard resData={resObj[4]}/>
            <RestaurantCard resData={resObj[5]}/>
            <RestaurantCard resData={resObj[6]}/>
            <RestaurantCard resData={resObj[7]}/>
            <RestaurantCard resData={resObj[8]}/>
            <RestaurantCard resData={resObj[9]}/>
            <RestaurantCard resData={resObj[10]}/> */
           
            
            ListOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            
} 

            
    
  
            </div>
        </div>
        
    )
}

export default Body