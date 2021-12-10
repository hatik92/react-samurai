import { authAPI } from "../api/api";
import { authUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let defaultState = {
    initialized: false
}

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

const initializedSuccess = () => ({type:INITIALIZED_SUCCESS})

export const initializedApp = () => (dispatch) => {
    let isAuthUser = dispatch(authUser());
    Promise.all([isAuthUser])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;