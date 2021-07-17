// Reducer helps dispatch or add to the data layer so we can use it in whatever component we want
export const initialState = {
  basket: [],
  user: null
};

//Selector how we get total for basket
// Reduce function maps through the basket it takes an initial amount and each item
// Every time it loops it adds the item price to the total amount, initial amount is 0
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

// action is weather you want to add or remove from the basket
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        // Original state
        ...state,
        // Basket is changed to be what it currently was plus what we decided to add
        basket: [...state.basket, action.item],
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      }
    
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      // copy of basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        // goes to the item in the basket array and cuts it out of the array
        newBasket.splice(index, 1)
      } else {
        console.warn (`Can't remove product (id: ${action.id}) as it's not in your basket!`)
      }

      return {
        ...state,
        basket: newBasket
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    // default state
    default:
      return state;
  }
};

export default reducer;
