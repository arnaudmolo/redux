import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'
import { Router } from 'react-router'

const Header = () =>
  <header className="header--main">
    <i className="header__logo icon-already-cool"></i>
  </header>

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
