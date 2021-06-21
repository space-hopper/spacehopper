import { SET_PRODUCTS } from "../actions/actions"

export const productReducer = (state = [], action) => {
  switch(action.type){
    case SET_PRODUCTS:
      return action.products
    default:
      return state;
  }
}