import { useState, useEffect } from "react"
import { Link } from "react-router-dom" ;
import {LOGO_URL} from "../utils/constants"

const Header = ()=>{
  const [btnNamereact, setbtnNamereact] = useState("Login")
  useEffect(()=>{
    console.log("calling useEffect")
  },[btnNamereact])
  return(
    <div className="header">
      <div className="logo-container">
        <img 
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to = "/">Home</Link></li>
          <li>
            <Link to = "/contact">Contact US</Link></li>
          <li>
            <Link to = "/about">About US</Link></li>
          <li>Cart</li>
          <button onClick={()=>{
            btnNamereact ==="Login"?setbtnNamereact("Logout"):setbtnNamereact("Login")
          }}>{btnNamereact}</button>
        </ul>
      </div>
    </div>    
    
  )
};
export default Header;