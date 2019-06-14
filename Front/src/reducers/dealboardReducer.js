import { ADD_DEALBOARD,LIST_DEALBOARD,SELECTONE_DEALBOARD,DELETEONE_DEALBOARD} from '../action/types'

const initialState = {
  dealboard: [],
  dealboardone:{},
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
    case SELECTONE_DEALBOARD:
        return {
            ...state,
            dealboardone: [action.payload, ...state.dealboardone]
        }
    case DELETEONE_DEALBOARD:
          return {
              ...state,
              dealboardone: [action.payload, ...state.dealboardone]
          }    
    default:
      return state;
      
  }
        
}
