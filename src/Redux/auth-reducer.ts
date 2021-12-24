import { authAPI } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const STOP_SUBMIT = "STOP_SUBMIT";

let initialState = {
    userId: null as number | null,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false as boolean,
    message: ''
}

const authReducer = (state = initialState, action:any) => {
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
type AuthUserData = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserActionType = {
    type: typeof SET_AUTH_USER
    data: AuthUserData
}
const setAuthUser = (userId: number | null, email: string | null, login:string | null, isAuth:boolean):SetAuthUserActionType => ({ type: SET_AUTH_USER, data: { userId, email, login, isAuth } })
type StopSubmitActionType = {
    type: typeof STOP_SUBMIT
    message: string
}
const stopSubmit = (message:string):StopSubmitActionType => ({type:STOP_SUBMIT, message})

export const authUser = () => {
    return (dispatch:any) => {
        return authAPI.authUser().then((response: { data: { resultCode: number; data: { id: any; email: any; login: any; }; }; }) => {
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

export const loginData = (formData:any) => (dispatch:any) => {
    authAPI.loginUser(formData.email, formData.password, formData.rememberMe).then((response: { data: { resultCode: number; messages: string[]; }; }) => {
        // debugger
        if (response.data.resultCode === 0) {
            dispatch(authUser())
        } else {
            dispatch(stopSubmit(response.data.messages[0]))
        }
    })
}

export const logout = () => (dispatch:any) => {
    authAPI.logoutUser().then((response: { data: { resultCode: number; }; }) => {
        // debugger
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false))
        }
    })
} 

export default authReducer;