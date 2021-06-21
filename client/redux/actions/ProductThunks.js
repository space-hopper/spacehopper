import { SET_PRODUCTS } from './actions';
import axios from 'axios'

export const fetchTheProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const {data: products} = await axios.get(`/api/products`)
      dispatch(fetchTheProducts(products))
    } catch (error) {
      console.log("Failed to fetch Products from API/PRODUCTS", error)
    }
  }
}