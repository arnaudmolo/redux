import API from './../utils/api'

export function login (user) {
  return async function (dispatch) {
    try {
      dispatch({
        type: 'LOGIN',
        payload: await API.loginUser(user)
      })
      return await dispatch(getUserJokes())
    } catch (e) {
      console.warn('erreur de login =(', e)
    }
  }
}

export function register (user) {

}

export function getUserJokes () {
  return async function (dispatch, getState) {
    const {user} = getState()
    try {
      return dispatch({
        type: 'FETCH-USER-JOKES',
        payload: await API.getUserJokes(user.userId, user.id)
      })
    } catch (e) {

    } finally {

    }
  }
}
