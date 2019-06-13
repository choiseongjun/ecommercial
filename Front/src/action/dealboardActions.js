import axios from 'axios';
import { ADD_DEALBOARD,LIST_DEALBOARD} from './types';

export const adddealBoard = (dealBoard) => dispatch => {
  axios
    .post('http://localhost:8080/dealboard/insert',dealBoard)
    .then(res =>
      dispatch({
        type: ADD_DEALBOARD,
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
  
  