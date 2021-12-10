import { userAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let defaultState = {
    posts: [
        { id:1, like:24, post: "hello!" },
        { id:2, like:21, post: "how are you?" },
        { id:3, like:53, post: "good!" },
        { id:4, like:12, post: "anh how are you?!" },
        { id:5, like:1, post: "yoo!" },
        { id:6, like:9, post: "chuvaaaaak!" },
        { id:7, like:7, post: "this is fineeee!" },
    ],
    newPostText: "it-kamasutra.com",
    userProfile: null
}

const profileReducer = (state = defaultState, action) => {
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
        default:
            return state

    }
}

export const addPost = (text) => ({type: ADD_POST, text})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export const getUserProfile = (id) => {
    return (dispatch) => {
        userAPI.profilePage(id).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export default profileReducer;