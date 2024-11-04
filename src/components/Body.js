import Resturentcard from "./Resturentcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const listOfRestaurants = useFetchRestaurants(); // Updated to match new return value

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Update filteredRestaurant when listOfRestaurants changes
  useEffect(() => {
    if (listOfRestaurants) {
      setFilteredRestaurant(listOfRestaurants);
    }
  }, [listOfRestaurants]);

  if (onlineStatus === false) {
    return (
      <div className="offline-container">
        <h2>You are offline</h2>
        <p>Connect to the internet to view restaurants</p>
      </div>
    );
  }

  // Display loading shimmer if listOfRestaurants is null (still fetching)
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
            <Link
              className="nav-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <Resturentcard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;