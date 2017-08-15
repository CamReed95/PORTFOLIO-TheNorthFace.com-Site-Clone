const initialState = {
  cart: [],
  detailedViewImg: '',
  detailViewImgName: '',
  totalCartCost: Number(0)
}


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PERSIST_REHYDRATE = 'persist/REHYDRATE';
const UPDATE_DETAIL_IMG = "UPDATE_DETAIL_IMG";
const UPDATE_QTY_PRICE = 'UPDATE_QTY_PRICE';

export default function reducer (state = initialState, action){
  switch (action.type) {

    case ADD_TO_CART:

      const itemPriceAdded = state.totalCartCost + Number(action.payload2);
      return Object.assign({}, state, {cart: [...state.cart, action.payload1], totalCartCost: itemPriceAdded} )

    case REMOVE_FROM_CART:
      const newCartArr = state.cart.filter( (product, index) => index !== action.payload1 )
      const priceRemoved = state.totalCartCost - Number(action.payload2);
      return Object.assign( {}, state, { cart: newCartArr, totalCartCost: 0} )

    case UPDATE_DETAIL_IMG:
      return Object.assign( {}, state, {detailedViewImg: action.payload1, detailViewImgName: action.payload2} )

    case UPDATE_QTY_PRICE:

      const qtyPriceAdded = state.totalCartCost + Number(action.payload2 - action.payload1);

      return Object.assign( {}, state, {totalCartCost: qtyPriceAdded} )

    case PERSIST_REHYDRATE:
      return { ...state, persistedState: action.payload};


    default:
      return state;
  }

};



export function addToCart(productObj, itemPrice) {
  return {
    type: ADD_TO_CART,
    payload1: productObj,
    payload2: itemPrice
   }
}

export function updateTotalPrice(itemPrice, totalItemPrice){
  return {
    type: UPDATE_QTY_PRICE,
    payload1: itemPrice,
    payload2: totalItemPrice
  }
}

export function removeFromCart(index, itemPrice) {
  return {
    type: REMOVE_FROM_CART,
    payload1: index,
    payload2: itemPrice
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
