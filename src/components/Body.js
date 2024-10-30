import Resturentcard from "./Resturentcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      console.log("API Response:", json); // Debug log

      // Find the correct cards array that contains restaurants
      const cards = json?.data?.cards;
      const restaurantList = cards?.find(
        card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!restaurantList) {
        throw new Error("No restaurant data found in the response");
      }

      setListOfRestraunt(restaurantList);
      setFilteredRestaurant(restaurantList);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setListOfRestraunt([]);
      setFilteredRestaurant([]);
    }
  };

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading restaurants</h2>
        <p>{error}</p>
        <button onClick={fetchData}>Try Again</button>
      </div>
    );
  }

  if (!listOfRestaurants) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link className="nav-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
            <Resturentcard key={restaurant.info.id} resData={restaurant} /></Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;