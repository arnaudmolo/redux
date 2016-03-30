import API from './../utils/api'

export function login (user) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: 'LOGIN',
        payload: await API.loginUser(user)
      })
    } catch (e) {
      console.warn('erreur de login =(', e)
    }
  }
}

export function register (user) {

}
