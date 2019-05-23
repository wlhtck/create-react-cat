import {
  REQUEST_DOG, REQUEST_DOG_ERROR, RECEIVE_DOG_SUCCESS, RECEIVE_DOG_FAILURE,
} from './consts';

export default (
  state = { data: {}, error: null, loading: false },
  { type, data, error },
) => {
  switch (type) {
    case REQUEST_DOG:
    case REQUEST_DOG_ERROR:
      return { ...state, error: null, loading: true };
    case RECEIVE_DOG_SUCCESS:
      return {
        ...state, data, error: null, loading: false,
      };
    case RECEIVE_DOG_FAILURE:
      return {
        ...state, data: {}, error, loading: false,
      };
    default:
      return state;
  }
};
