import { useState, useEffect } from "react";

const useFetchRestaurants = () => {
  const [data, setData] = useState(null);

  const url =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const cards = json?.data?.cards;
    const restaurantList = cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setData(restaurantList || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchRestaurants;