import { FETCH_CAT, RECEIVE_CAT_SUCCESS, RECEIVE_CAT_FAILURE } from './consts'

export const fetchCat = () => ({
  type: FETCH_CAT,
});

export const receiveCatSuccess = (data) => ({
  type: RECEIVE_CAT_SUCCESS,
  data,
});

export const receiveCatFailure = (error) => ({
  type: RECEIVE_CAT_FAILURE,
  error,
});
