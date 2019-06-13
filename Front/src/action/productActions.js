import axios from 'axios';
import { ADD_PRODUCT} from './types';



export const addProduct = (dealboard) => dispatch => {
  axios
    .post('http://localhost:8080/dealboard/insert',dealboard)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
}


