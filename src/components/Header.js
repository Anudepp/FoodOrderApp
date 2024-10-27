import { useState } from "react";
import {LOGO_URL} from "../utils/constants"

const Header = ()=>{
  const [btnNamereact, setbtnNamereact] = useState("Login")
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
          <li>Home</li>
          <li>Contact US</li>
          <li>About US</li>
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