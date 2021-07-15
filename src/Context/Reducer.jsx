// Reducer helps dispatch or add to the data layer so we can use it in whatever component we want
export const initialState = {
  basket: [],
};

//Selector how we get total for basket
// Reduce function maps through the basket it takes an initial amount and each item
// Every time it loops it adds the item price to the total amount, initial amount is 0
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

// action is weather you want to add or remove from the basket
const reducer = (state, action) => {
//   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        // Original state
        ...state,
        // Basket is changed to be what it currently was plus what we decided to add
        basket: [...state.basket, action.item],
      };
    // default state
    default:
      return state;
  }
};

export default reducer;
