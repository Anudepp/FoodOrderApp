import Resturentcard from "./Resturentcard";

import resList from "../utils/mockData";

import { useState } from "react";

const Body = ()=>{
  const [listOfresturent, setlistOfresturent] = useState(resList)
  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={()=>{
            const filterList = listOfresturent.filter(
              (res)=>res.rating>4
            );
            setlistOfresturent(filterList)
          }}>Most Rate Resturen's
        </button>
        
        
        </div>

      <div className="res-container">
        {listOfresturent.map((restaurant) => (
         <Resturentcard key={restaurant.id} resData={restaurant} />
         ))}
      </div>
    </div>
    
  )
}

export default Body;