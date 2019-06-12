import axios from 'axios';
import { ADD_PRODUCT,LIST_DEALBOARD} from './types';



export const addProduct = (product) => dispatch => {
  axios
    .post('http://localhost:8080/product/insert',product)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
}
function list_dealBoard () {
  return (dispatch)=>axios.get(`http://localhost:8080/dealboard/list`)
  // return axios.get(`${basePath}/users.json`)
   .then(item =>
      dispatch({
        type: LIST_DEALBOARD,
        payload: item.data,
      })
    )  
}
export {
  list_dealBoard
}

