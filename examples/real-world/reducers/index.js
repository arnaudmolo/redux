import * as ActionTypes from '../actions'
import merge from 'lodash/merge'

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function jokes (state = {jokes: [], error: false}, action) {
  switch (action.type) {
    case 'JOKE-ERROR':
      return {
        ...state,
        error: true
      }
    case 'JOKE-FETCH':
      return {
        ...state,
        jokes: [action.payload, ...state.jokes]
      }
  }
  return state
}

function user (state = {}, action) {
  if (action.type === 'LOGIN') {
    return {
      ...action.payload,
      connected: true
    }
  }
  return state
}

const rootReducer = combineReducers({
  routing,
  jokes,
  user
})

export default rootReducer
