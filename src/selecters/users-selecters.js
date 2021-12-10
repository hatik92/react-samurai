// import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
  return state.usersPage.users.filter(u => true)
};
export const getPagelector = (state) => state.usersPage.pageSize;
export const getTotalUserCount = (state) => state.usersPage.totalUserCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;