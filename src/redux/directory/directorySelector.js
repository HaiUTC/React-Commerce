<<<<<<< HEAD
import {createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
=======
import {createSelector } from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
)