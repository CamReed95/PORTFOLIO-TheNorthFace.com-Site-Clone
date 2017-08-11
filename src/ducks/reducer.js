const initialState = {
  cart: []
}

const ADD_TO_CART = "ADD_TO_CART";

export default function (state = initialState, action){
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {cart: [...state.cart, action.payload] })
      break;
    default:
  }

};
