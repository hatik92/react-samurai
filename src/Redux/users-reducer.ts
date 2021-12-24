import { userAPI } from "../api/api";
import { FollowUnfollowSuccess } from "../helpers/helpers";
import { PhotosType, Users, UsersItem } from "../tsTypes/myTypes";

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SELECT_PAGE = "SELECT_PAGE";
const TOTAL_USER_COUNT = "TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";


let initialState = {
    users: [] as Array<UsersItem>,
    pageSize: 10,
    totalUserCount: 7000,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}
const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: FollowUnfollowSuccess(state.users, 'id', action.id, { followed: true })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: FollowUnfollowSuccess(state.users, 'id', action.id, { followed: false })
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
type FollowUnfollowSuccessActionType = {
    type: typeof FOLLOW_SUCCESS | typeof UNFOLLOW_SUCCESS
    id: number
}
const followSuccess = (user_id: number): FollowUnfollowSuccessActionType => ({ type: FOLLOW_SUCCESS, id: user_id })
const unfollowSuccess = (user_id: number): FollowUnfollowSuccessActionType => ({ type: UNFOLLOW_SUCCESS, id: user_id })
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<Users>
}
const setUsers = (users: Array<Users>): SetUsersActionType => ({ type: SET_USERS, users: users })
type SelectPageActionType = {
    type: typeof SELECT_PAGE
    page: number
}
const selectPage = (page: number): SelectPageActionType => ({ type: SELECT_PAGE, page: page })
type SetTotalUserCountActionType = {
    type: typeof TOTAL_USER_COUNT
    totalCount: number
}
const setTotalUserCount = (totalCount: number): SetTotalUserCountActionType => ({ type: TOTAL_USER_COUNT, totalCount: totalCount })
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type ToggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetching: boolean
    userId: number
}
const toggleIsFollowing = (isFetching: boolean, userId: number): ToggleIsFollowingActionType => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId })


export const getUsres = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(selectPage(currentPage))
        userAPI.getUsers(currentPage, pageSize).then((data: { items: Users[]; totalCount: number; }) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}

export const unfollow = (id: number) => {
    return (dispatch: (arg0: { type: "FOLLOW_SUCCESS" | "UNFOLLOW_SUCCESS" | "TOGGLE_IS_FOLLOWING"; isFetching?: boolean; userId?: number; id?: number; }) => void) => {
        dispatch(toggleIsFollowing(true, id));
        userAPI.unfollow(id).then((data: { resultCode: number; }) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
                dispatch(toggleIsFollowing(false, id))
            }
        })
    }
}

export const follow = (id: number) => {
    return (dispatch: (arg0: { type: "FOLLOW_SUCCESS" | "UNFOLLOW_SUCCESS" | "TOGGLE_IS_FOLLOWING"; isFetching?: boolean; userId?: number; id?: number; }) => void) => {
        dispatch(toggleIsFollowing(true, id));
        userAPI.follow(id).then((data: { resultCode: number; }) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
                dispatch(toggleIsFollowing(false, id))
            }
        })
    }
}



export default usersReducer;