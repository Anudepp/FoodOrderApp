import { SWIGGY_CDN_URL } from "../utils/constants";

const Resturentcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;
  

  
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img 
        src={`${SWIGGY_CDN_URL}${cloudinaryImageId}`}
        alt={`${name} image`}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3> 
      <h3>{avgRating} <span className="star-symbol">⋆</span></h3>
      <h3>{costForTwo}</h3>
      <h3>{sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default Resturentcard;