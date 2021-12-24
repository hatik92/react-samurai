// import { authAPI } from "../api/api";
import { authUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action:any) => {
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

export const initializedApp = () => (dispatch:any) => {
    let isAuthUser = dispatch(authUser());
    Promise.all([isAuthUser])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;