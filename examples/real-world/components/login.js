import React from 'react'

const Login = ({onSubmit, email, password}) =>
  <div>
    <h2>You have to be logged to post a joke !</h2>
    <form
      method="post"
      onSubmit={e => {
        e.preventDefault()
        return onSubmit({email, password})
      }}
      className="form isVertical">
      <div className="form__block">
        <input
          onChange={e => email = e.nativeEvent.target.value}
          type="email"
          placeholder="email"
          className="input--rounded input--full-w" />
      </div>
      <div className="form__block">
        <input
          onChange={e => password = e.nativeEvent.target.value}
          type="password"
          placeholder="password"
          className="input--rounded input--full-w" />
      </div>
      <div className="form__block">
        <input type="submit" className="button--white button--full-w" />
      </div>
    </form>
  </div>

export default Login
