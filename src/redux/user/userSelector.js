<<<<<<< HEAD
import {createSelector } from 'reselect'

const userSelect = state => state.user

export const selectCurrentUser = createSelector(
    [userSelect],
    (user) => user.currentUser
)
export const selectSignInLoading = createSelector(
    [userSelect],
    user => user.isLoading
=======
import {createSelector } from 'reselect'

const userSelect = state => state.user
// const selectCart = state => state.cart

export const selectCurrentUser = createSelector(
    [userSelect],
    (user) => user.currentUser
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
)