import axios from 'axios';
import { ADD_DEALBOARD,LIST_DEALBOARD,SELECTONE_DEALBOARD,DELETEONE_DEALBOARD,UPDATE_DEALBOARD} from './types';

export const adddealBoard = (dealBoard,data) => dispatch => {
  axios
    .post('http://localhost:8080/dealboard/insert',dealBoard,data)
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
function update_dealBoard(dealboardno,dealboard) {
    return (dispatch) => axios.post(`http://localhost:8080/dealboard/update/`+dealboardno,dealboard)
    .then(oneitem =>
      dispatch({
        type: UPDATE_DEALBOARD, 
        payload: oneitem.data,
      })
    )  
  }
  export const deleteone_dealBoard = (dealboardno) => dispatch => {
    axios
      .delete('http://localhost:8080/dealboard/delete/'+dealboardno)
      .then(res =>
        dispatch({
          type: DELETEONE_DEALBOARD,
          payload: res.data
        })
      )
  }
  export {
    list_dealBoard
    ,selectone_dealBoard
    ,update_dealBoard
  }
  
  