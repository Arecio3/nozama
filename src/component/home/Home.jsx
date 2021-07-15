import React from "react";
import background from "../../images/home.jpeg";
import Product from "../product/Product";
import Product1 from "../../images/product1.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImg" src={background} alt="" />
      </div>

      <div className="homeRow">
        <Product title='Timeless Laws of Development' rating={5} image={Product1} price={22.95}/>
        <Product />
      </div>

      <div className="homeRow">
      <Product />
      <Product />
      <Product />
      </div>

      <div className="homeRow">
      <Product />
      </div>
    </div>
  );
}

export default Home;
