import { FETCH_PRODUCTS } from "../actions/actions"

export const productReducer = (state = {}, action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return action.products
    default:
      return state;
  }
}