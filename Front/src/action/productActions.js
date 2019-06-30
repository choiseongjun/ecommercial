import axios from 'axios';
import { ADD_PRODUCT } from './types';

const baseUrl = 'http://localhost:8080/product/insert';

export const addProduct = (product) => dispatch => {
  axios
    .post(baseUrl,product)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: "res.data"
      })
    )
};

