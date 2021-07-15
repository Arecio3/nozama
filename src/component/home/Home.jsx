import React from "react";
import background from "../../images/home.jpeg";
import Product from "../product/Product";
import Product1 from "../../images/product1.jpg";
import Product2 from "../../images/product2.jpeg";
import Product3 from "../../images/product3.jpg";
import Product4 from "../../images/product4.jpg";
import Product5 from "../../images/product5.jpg";
import Product6 from "../../images/product6.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImg" src={background} alt="" />
      </div>

      <div className="homeRow">
        <Product
          title="Timeless Laws of Development"
          rating={5}
          image={Product1}
          price={22.95}
        />
        <Product title='The Idea Factory: Bell Labs and the Great Age of American Innovation' price={7.55} rating={4} image={Product2}/>
      </div>

      <div className="homeRow">
        <Product title='SAMSUNG Odyssey G3 Series 27-Inch FHD 1080p Gaming Monitor, 144Hz, 1ms, 3-Sided Border-Less, VESA Compatible, Height Adjustable Stand, FreeSync Premium' price={269.99} rating={5} image={Product3}/>
        <Product title='Ghost of Tsushima Directors Cut' price={69.95} rating={3} image={Product4}/>
        <Product title='Canon PowerShot SX540 HS Digital Camera' price={299} rating={3} image={Product6}/>
      </div>

      <div className="homeRow">
        <Product title='Skytech Archangel Gaming Computer PC Desktop' price={1199} rating={5} image={Product5}/>
      </div>
    </div>
  );
}

export default Home;
