import { useEffect ,useState} from "react";

const useRestaurentMenu = (resId) => { 

  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => { 
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId);
    const json = await data.json();
    setresInfo(json.data);
  }


  return  resInfo;
  

}

export default useRestaurentMenu;