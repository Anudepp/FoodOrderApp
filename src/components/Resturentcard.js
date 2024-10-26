const Resturentcard = (props )=>{
  const {resData } = props
  const {
    image,
    resName,
    cost,
    deliveryTime,
    cuisine,
    rating
  }= resData
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img src={image} alt={`${resData.resName} image`}  />
      <h3>{resName}</h3>
      <h3>{cuisine.join(" , ")}</h3> 
      <h3>{rating} Stars</h3>
      <h3>Average cost ₹{cost}</h3>
      <h3>Deliverytime: {deliveryTime} Mins</h3>
      
         
    </div>
  )
}
export default Resturentcard