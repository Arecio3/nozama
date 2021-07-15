import React from "react";
import amazonLogo from "../../images/amazonLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../Context/StateProvider";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={amazonLogo} alt="" />
      </Link>

      <div className="headerSearch">
        <input className="headerInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
        {/* Logo */}
      </div>

      <div className="headerNav">
        <Link className='link' to="/login">
          <div className="headerOption">
            <span className="rightOptionLineOne">Hello Guest</span>
            <span className="rightOptionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="headerOption">
          <span className="rightOptionLineOne">Returns</span>
          <span className="rightOptionLineTwo">& Orders</span>
        </div>

        <div className="headerOption">
          <span className="rightOptionLineOne">Your</span>
          <span className="rightOptionLineTwo">Membership</span>
        </div>

        <Link to="/checkout">
          <div className="headerBasketLogo">
            <ShoppingBasketIcon />
            {/* ? is optional chaining so if for any reason basket value comes as undefined it will terminate  */}
            <span className="rightOptionLineTwo basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
