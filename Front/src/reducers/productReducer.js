import { ADD_PRODUCT,LIST_DEALBOARD} from '../action/types'

const initialState = {
  products: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type){
  
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
   
    default:
      return state;
  }
}
