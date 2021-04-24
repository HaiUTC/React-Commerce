import {createSelector } from 'reselect'

const userSelect = state => state.user
// const selectCart = state => state.cart

export const selectCurrentUser = createSelector(
    [userSelect],
    (user) => user.currentUser
)