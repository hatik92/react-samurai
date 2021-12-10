import { authAPI } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const STOP_SUBMIT = "STOP_SUBMIT";

let defaultState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    message: ''
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                message: ""
            }
        case STOP_SUBMIT:
            return {
                ...state,
                message: action.message
            }
        default:
            return state

    }
}

const setAuthUser = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER, data: { userId, email, login, isAuth } })
const stopSubmit = (message) => ({type:STOP_SUBMIT, message})

export const authUser = () => {
    return (dispatch) => {
        return authAPI.authUser().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(setAuthUser(id, email, login, true))
            }
        })
    }
}

// export const authUser = () => async (dispatch) => {
//     let response = await authAPI.authUser()
//     if (response.data.resultCode === 0) {
//         let { id, email, login } = response.data.data
//         dispatch(setAuthUser(id, email, login, true))
//     }

// }

export const loginData = (formData) => (dispatch) => {
    authAPI.loginUser(formData.email, formData.password, formData.rememberMe).then(response => {
        // debugger
        if (response.data.resultCode === 0) {
            dispatch(authUser())
        } else {
            dispatch(stopSubmit(response.data.messages[0]))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logoutUser().then(response => {
        // debugger
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false))
        }
    })
} 

export default authReducer;