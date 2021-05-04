import { LOAD_SHOPPING_ITEM, LOAD_EDITED_ITEM } from "../actions/shoppingActions.js";

//Shopping list reducer
const shoppingReducer = (state = { shoppingList: [], updatedItem:{} }, action) => {
  switch (action.type) {
    //Loads all shopping items
    case LOAD_SHOPPING_ITEM: {
      const newShoppingList = {
        ...state,
        shoppingList: [...action.payload],
      };
      return newShoppingList;
    }
    //Case to load edited item this is used for both Shopping and Pantry list!!!!!
    case LOAD_EDITED_ITEM:{
      const itemToBeUpdated = {
        ...state,
        updatedItem: action.payload,
      }    
      return itemToBeUpdated
    }
    //Default, returns state
    default:
      return state;
  }
};

export default shoppingReducer;