import {createSelector} from 'reselect'

export const getJokes = state => state.jokes.jokes
export const getLastJoke = state => state.jokes.jokes[0]

export const getUser = state => state.user
export const getUserJokes = state => getUser(state).jokes
