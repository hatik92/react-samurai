import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import imagesReducer from "./images-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    images: imagesReducer,
    nav: navReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});


// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
// let store = createStore(reducers, composedEnhancer);
// window.store = store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;
export default store;