import { BiSolidDrink } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { LuSalad } from "react-icons/lu";
import { GiHotSpices } from "react-icons/gi";
import { LuCake } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5";
function Button() {
  return (
    <button className="click-btn">
      View All
    </button>
  )
}

function Header() {
    return (
    <div className="header-container">
      <div className="header">
        
        <ul className="nav-list">
          <li><a href="#" className="nav-link"><IoFastFood />All</a></li>
          <li><a href="#" className="nav-link"><BiSolidDrink />Drinks</a></li>
          <li><a href="#" className="nav-link"><FaPizzaSlice />Pizza</a></li>
          <li><a href="#" className="nav-link"><LuSalad />Salad</a></li>
          <li><a href="#" className="nav-link"><GiHotSpices />Spicy</a></li>
          <li><a href="#" className="nav-link"><LuCake />Sweets</a></li>
        </ul>
      </div>
      <div>
         <button className="click-btn">  View All </button>
      </div>
    </div>
  )
}

export default Header;