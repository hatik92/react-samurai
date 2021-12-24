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


let rootReducer = combineReducers({
    images: imagesReducer,
    nav: navReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});
type RootReducerType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducerType>

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
// let store = createStore(reducers, composedEnhancer);
// window.store = store
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;
export default store;