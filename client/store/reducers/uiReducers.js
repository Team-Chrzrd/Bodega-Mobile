import { TOGGLE_TABS, DISPLAY_EDITOR } from "../actions/uiActions.js";

//Initial state for UI
const initialState = {
  displayShopping: true,
  displayPantry: false,
  displayModal: false,
  isEdit: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    //Toggles between shopping and pantry lists
    case TOGGLE_TABS: {
      return {
        ...state,
        displayShopping: action.payload.displayShopping,
        displayPantry: action.payload.displayPantry,
      };
    }
    //Displays modals
    case DISPLAY_EDITOR: {
      return {
        ...state,
        displayModal: action.payload.displayModal,
        isEdit: action.payload.isEdit,
      };
    }
    //Default, returns state
    default:
      return state;
  }
};

export default uiReducer;