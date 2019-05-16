import { FETCH_CAT, FETCH_CAT_ERROR, RECEIVE_CAT_SUCCESS, RECEIVE_CAT_FAILURE } from './consts'

export default (
  state = { data: {}, error: null, loading: false },
  { type, data, error }
) => {
  switch (type) {
    case FETCH_CAT:
    case FETCH_CAT_ERROR:
      return { ...state, error: null, loading: true };
    case RECEIVE_CAT_SUCCESS:
      return { ...state, data, error: null, loading: false };
    case RECEIVE_CAT_FAILURE:
      return { ...state, data: {}, error, loading: false };
    default:
      return state;
  }
}
