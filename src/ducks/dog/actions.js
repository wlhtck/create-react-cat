import { REQUEST_DOG, RECEIVE_DOG_SUCCESS, RECEIVE_DOG_FAILURE, REQUEST_DOG_ERROR } from './consts'

export const requestDog = () => ({
  type: REQUEST_DOG,
});

export const requestDogError = () => ({
  type: REQUEST_DOG_ERROR,
});

export const receiveDogSuccess = (data) => ({
  type: RECEIVE_DOG_SUCCESS,
  data,
});

export const receiveDogFailure = (error) => ({
  type: RECEIVE_DOG_FAILURE,
  error,
});
