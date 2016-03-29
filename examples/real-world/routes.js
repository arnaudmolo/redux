import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Post from './containers/Post'

export default (
  <Route path="/" component={App}>
    <Route path="/"
      component={Home} />
     <Route path="/post"
       component={Post} />
  </Route>
)
