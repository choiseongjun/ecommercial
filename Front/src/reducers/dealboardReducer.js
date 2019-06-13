import { ADD_DEALBOARD,LIST_DEALBOARD} from '../action/types'

const initialState = {
  dealboard: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type){
  
    case ADD_DEALBOARD:
        return {
          ...state,
          dealboard: [action.payload, ...state.dealboard]
        }
    case LIST_DEALBOARD:
        return {
            ...state,
            dealboard: [action.payload, ...state.dealboard]
        }
    default:
      return state;
  }
}
