import { LOAD_PANTRY_ITEM } from '../actions/pantryActions.js'

//Loads pantry items from db
const pantryReducer = (state = { pantryList: [] }, action) => {
  switch (action.type) {
    case LOAD_PANTRY_ITEM: {
      const newPantryList = {
        ...state,
        pantryList: [...action.payload],
      };
      return newPantryList;
      };
    default:
      return state;
  }
}


export default pantryReducer;