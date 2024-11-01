import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {

  const [resInfo, setresInfo] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resid);

    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  }

  const { name = "Unknown", cuisines = [] } = resInfo?.cards[2]?.card?.card?.info || {};
  
  const { itemCards =[]} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
  
  console.log(itemCards);

  return (resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
    <h1 className="menu-title">{name}</h1>
    <h3 className="menu-cuisines">{cuisines.join(", ")}</h3>
    <h2 className="menu-subtitle">Menu</h2>
    <ul className="menu-list">
      {itemCards.map((item) => (
        <li key={item.card.info.id} className="menu-item">
          <span className="menu-item-name">{item.card.info.name}</span>
          <span className="menu-item-price">₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
          <span>
            <img className="menu-img"
              src={`${SWIGGY_CDN_URL}${item.card.info.imageId}`}
              />
          </span>
          
          
            
          
        </li>
      ))}
    </ul>
  </div>
  ) );
};
export default RestaurantMenu;