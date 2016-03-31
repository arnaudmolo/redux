import {createSelector} from 'reselect'

export const getJokes = state => state.jokes.jokes
export const getLastJoke = state => state.jokes.jokes[0]

export const getUserJokes = state => state.user.jokes
