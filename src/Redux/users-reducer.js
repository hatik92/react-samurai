import { userAPI } from "../api/api";

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";
const TOTAL_USER_COUNT = "TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let defaultState = {
    users: [],
    pageSize: 10,
    totalUserCount: 7000,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state

    }
}

const followSuccess = (user_id) => ({ type: FOLLOW_SUCCESS, id: user_id })
const unfollowSuccess = (user_id) => ({ type: UNFOLLOW_SUCCESS, id: user_id })
const setUsers = (users) => ({ type: SET_USERS, users: users })
const selectPage = (page) => ({ type: SELECT_PAGE, page: page })
const setTotalUserCount = (totalCount) => ({ type: TOTAL_USER_COUNT, totalCount: totalCount })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId })


export const getUsres = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(selectPage(currentPage))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        userAPI.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
                dispatch(toggleIsFollowing(false, id))
            }
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        userAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
                dispatch(toggleIsFollowing(false, id))
            }
        })
    }
}



export default usersReducer;