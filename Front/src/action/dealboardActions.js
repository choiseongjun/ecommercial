import axios from 'axios';
import { ADD_DEALBOARD,LIST_DEALBOARD,SELECTONE_DEALBOARD} from './types';

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
     .then(item =>
        dispatch({
          type: LIST_DEALBOARD,
          payload: item.data,
        })
      )  
  }
function selectone_dealBoard (dealboard) {
    return (dispatch)=>axios.get(`http://localhost:8080/dealboard/detail/`+dealboard)
     .then(oneitem =>
        dispatch({
          type: SELECTONE_DEALBOARD, 
          payload: oneitem.data,
        })
      )  
  }
  export {
    list_dealBoard
    ,selectone_dealBoard
  }
  
  