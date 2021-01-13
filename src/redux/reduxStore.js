import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReduser";
import profileReducer from "./profileReducer";
let reducerBranches = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducerBranches);

export default store;
