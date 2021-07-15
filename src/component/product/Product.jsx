import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import "./product.css";

function Product({ id, title, image, rating, price }) {

  const [{ basket }, dispatch] = useStateValue();

  console.log(`This is the basket`, basket)

  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      // type of action
      type: 'ADD_TO_BASKET',
      // actual item being pushed
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className="product" >
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
  // Explains line 15
//  1.  Array(rating) creates an array of rating empty elements, so if rating is 3, then your Array(rating) returns [empty, empty, empty].
// 2. [empty, empty, empty].fill() returns [undefined, undefined, undefined], because in JavaScript, you can't map() an empty value. That's a bit quirky part of JavaScript, but it is what it is.
// 3. Now, [undefined, undefined, undefined].map((_, i) => ( <p>⭐</p> )) converts your array to [<p>⭐</p>, <p>⭐</p>, <p>⭐</p>], which is not a valid JavaScript, but I'm assuming you're using React and JSX. It will be compiled to an array of HTML paragraph elements with a ⭐ as its text, each.
// As you're using JSX with an expression inside curly braces like that, it's going to be your output.

// As a result, this snippet will output <p>⭐</p><p>⭐</p><p>⭐</p>, or any number of paragraphs, depending on the rating value.
}

export default Product;
