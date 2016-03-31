import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Post from './containers/Post'

import { fetchJokes } from './actions/jokes-actions'

export default (dispatch) => (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home} onEnter={onEnterIndex(dispatch)} />
    <Route path="/post"
       component={Post} />
  </Route>
)

const onEnterIndex = dispatch => (nextState, replaceState) => {
  return dispatch(fetchJokes())
}
