import { REQUEST_CAT, RECEIVE_CAT_SUCCESS, RECEIVE_CAT_FAILURE, REQUEST_CAT_ERROR } from './consts'

export const requestCat = () => ({
  type: REQUEST_CAT,
});

export const requestCatError = () => ({
  type: REQUEST_CAT_ERROR,
});

export const receiveCatSuccess = (data) => ({
  type: RECEIVE_CAT_SUCCESS,
  data,
});

export const receiveCatFailure = (error) => ({
  type: RECEIVE_CAT_FAILURE,
  error,
});
