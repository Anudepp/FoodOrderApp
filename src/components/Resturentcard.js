import { SWIGGY_CDN_URL } from "../utils/constants";

const Resturentcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId = "", name = "Unknown", avgRating = "N/A", cuisines = [], costForTwo = "N/A", sla = {} } = resData?.info || {};

  return (
    <div className="res-card">
      <img 
        src={`${SWIGGY_CDN_URL}${cloudinaryImageId}`}
        alt={`${name} image`}
        className="res-logo"
      />
      <div className="res-card-content">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-rating">
          <span>{avgRating}</span> <span className="star-symbol">⋆</span>
        </div>
        <p className="res-cost">{costForTwo}</p>
        <p className="res-delivery-time">{sla.deliveryTime} min</p>
      </div>
    </div>
  );
};

// Higher order component

//input is Resturentcard => vegResturentcard


export const withVegLabel = (Resturentcard) => { 
  return (props) => {
    return (
      <div>
        <label>Vegetarian</label>
        <Resturentcard{...props} />
      </div>
    );
    
  }
}


export default Resturentcard;