const initialState = {
  cart: [],
  detailedViewImg: '',
  detailViewImgName: ''
}


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PERSIST_REHYDRATE = 'persist/REHYDRATE';
const UPDATE_DETAIL_IMG = "UPDATE_DETAIL_IMG";

export default function reducer (state = initialState, action){
  switch (action.type) {

    case ADD_TO_CART:
      return Object.assign({}, state, {cart: [...state.cart, action.payload] })

    case REMOVE_FROM_CART:
      const newCartArr = state.cart.filter( (product, index) => index !== action.payload )
      return Object.assign( {}, state, { cart: newCartArr } )

    case PERSIST_REHYDRATE:
      return { ...state, persistedState: action.payload};

    case UPDATE_DETAIL_IMG:
    console.log(action.payload1, action.payload2)
    return Object.assign( {}, state, {detailedViewImg: action.payload1, detailViewImgName: action.payload2} )

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

export function updateDetailImg(imgUrl, imgName) {
  console.log(imgUrl, imgName)
  return {
    type: UPDATE_DETAIL_IMG,
    payload1: imgUrl,
    payload2: imgName
  }
}
