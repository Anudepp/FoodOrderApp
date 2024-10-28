import Resturentcard from "./Resturentcard";

import resList from "../utils/mockData";

import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

const Body = ()=>{
  const [listOfresturent, setlistOfresturent] = useState([]);
  const [filteredResturent, setfilteredResturent] = useState([]);
  const [searchText, setsearchText] = useState([]);
  console.log("header render")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    setlistOfresturent(resList);  
    setfilteredResturent(resList);
  };

  return listOfresturent.length  ===0?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} 
            onChange={(e) => {
              setsearchText(e.target.value);
              
            }}
             >
          </input>
          <button onClick={()=>{
            console.log(searchText)
            const filteredResturents = listOfresturent.filter(
              (res) => res.resName.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredResturent(filteredResturents);

          }}>Search</button>
        </div>
        <button 
          className="filter-btn"
          onClick={()=>{
            const filteredList = listOfresturent.filter(
              (res)=>res.rating>4
            );
            setlistOfresturent(filteredList)
          }}>Most Rate Resturen's
        </button>
        </div>
      <div className="res-container">
        {filteredResturent.map((restaurant) => (
         <Resturentcard key={restaurant.id} resData={restaurant} />
         ))}
      </div>
    </div>
    
  )
}

export default Body;