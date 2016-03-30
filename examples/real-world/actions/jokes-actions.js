import API from './../utils/api'

function fetchJokesError () {
  return {
    type: 'JOKE-ERROR'
  }
}

export function fetchJokes () {
  return async function (dispatch, getState) {
    try {
      const res = await API.getRandomJoke()
      console.log(res)
    } catch (e) {
      dispatch(fetchJokesError())
    }
  }
}

export function postJoke (joke, user) {
  return async function (dispatch, getState) {
    try {
      const res = await API.saveJoke(joke, {id: 'molo'})
    } catch (e) {
      console.log('error ?', e);
    } finally {
      console.log('bon c bon ?')
    }
  }
}
