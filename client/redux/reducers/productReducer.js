import { FETCH_PRODUCTS } from "../actions/actions"

export const productReducer = (state = [], action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      console.log(action.products)
      return action.products
    default:
      return state;
  }
}