import types from './types';
import axios from 'axios';

const API = 'http://api.reactprototypes.com';

export const getMovieQuote = () => async dispatch => {
  const axiosConfig = {
    headers: {
      authorization: localStorage.getItem('token'),
    }
  };
  const res = await axios.get(API, axiosConfig);

  dispatch({
    type: types.GET_MOVIE_QUOTE,
    quote: res.data.message,
  });
}

export const signIn = userValues => async dispatch => {
  try {
    const res = await axios.post(API + '/signin', userValues);

    localStorage.setItem('token', res.data.token);

    dispatch({
      type: types.SIGN_IN,
    });
  } catch(err) {
    dispatch({
      type: types.SIGN_IN_ERROR,
      error: 'Invalid email and/or password',
    });
  }
}

export function signOut() {
  localStorage.removeItem('token');

  return {
    type: types.SIGN_OUT,
  }
}

export function signUp(userInfo) {
  return async function(dispatch) {
    const res = await axios.post(API + '/signup', userInfo);

    localStorage.setItem('token', res.data.token);

    dispatch({
      type: types.SIGN_UP,
    });
  };
}
