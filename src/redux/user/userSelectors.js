import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
   [selectUser],
   (user) => user.currentUser
)

export const selectUsersData = createSelector(
   [selectUser],
   (user) => user.usersData
)