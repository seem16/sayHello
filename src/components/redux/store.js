import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from  "./messageReducer"
import friendsReducer from "./friendsReducer";
import authReduer from "./authReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  friendsPage: friendsReducer,
  auth: authReduer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));


window.store = store;


export default store;
