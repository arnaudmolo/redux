import API from './../utils/api'

function fetchJokesError () {
  return {
    type: 'JOKE-ERROR'
  }
}

function getJokes (joke) {
  return {
    type: 'JOKE-FETCH',
    payload: joke
  }
}

export function fetchJokes () {
  return async function (dispatch, getState) {
    try {
      return dispatch(getJokes(await API.getRandomJoke()))
    } catch (e) {
      console.warn(e)
      return dispatch(fetchJokesError())
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
