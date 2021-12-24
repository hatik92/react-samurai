import { userAPI } from "../api/api";
import { ProfileType } from "../tsTypes/myTypes";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


type Post = {
    id: number
    like: number
    post: string
}

let initialState = {
    posts: [
        { id:1, like:24, post: "hello!" },
        { id:2, like:21, post: "how are you?" },
        { id:3, like:53, post: "good!" },
        { id:4, like:12, post: "anh how are you?!" },
        { id:5, like:1, post: "yoo!" },
        { id:6, like:9, post: "chuvaaaaak!" },
        { id:7, like:7, post: "this is fineeee!" },
    ] as Array<Post>,
    newPostText: "it-kamasutra.com",
    userProfile: null as ProfileType | null,
    status: ""
}

const profileReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id:1, like:24, post: action.text }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }
        default:
            return state

    }
}
type AddPostActionType = {
    type: typeof ADD_POST
    text: string
}
export const addPost = (text:string):AddPostActionType => ({type: ADD_POST, text})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    userProfile: ProfileType
}
export const setUserProfile = (userProfile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, userProfile})
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: any
}
export const savePhotoSuccess = (photos:any):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (id:number) => {
    return (dispatch:any) => {
        userAPI.profilePage(id).then((data: ProfileType) => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (id: number) => {
    return (dispatch:any) => {
        userAPI.profileStatus(id).then((data: string) => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status:string) => async (dispatch:any) => {
    const data = await userAPI.updateProfileStatus(status)
    if(data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const uploadImage = (imageFile:any) => async (dispatch:any) => {
    const response = await userAPI.savePhoto(imageFile)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;