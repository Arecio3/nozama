import React from "react";
import background from "../../images/home.jpeg";
import Product from "../product/Product";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImg" src={background} alt="" />
      </div>

      <div className="homeRow">
        <Product />
        {/* Product */}
      </div>

      <div className="homeRow">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>

      <div className="homeRow">{/* Product */}</div>
    </div>
  );
}

export default Home;
