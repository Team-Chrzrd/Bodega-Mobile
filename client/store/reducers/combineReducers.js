import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer.js";
import uiReducer from "./uiReducers.js";
import pantryReducer from './pantryReducer.js'

//Redux combined reducers
const reducers = combineReducers({
  shopping: shoppingReducer,
  ui: uiReducer,
  pantry: pantryReducer
});


export default reducers;