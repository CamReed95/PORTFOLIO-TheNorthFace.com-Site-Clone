const initialState = {
  cart: []
}


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PERSIST_REHYDRATE = 'persist/REHYDRATE';

export default function reducer (state = initialState, action){
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, {cart: [...state.cart, action.payload] })
    case REMOVE_FROM_CART:
      const newCartArr = state.cart.filter( (product, index) => index !== action.payload )
      return Object.assign( {}, state, { cart: newCartArr } )
    case PERSIST_REHYDRATE:
      return { ...state, persistedState: action.payload};
    default:
      return state;
  }

};

export function addToCart(productObj) {
  return {
    type: ADD_TO_CART,
    payload: productObj
   }
}

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    payload: index
  }
}
