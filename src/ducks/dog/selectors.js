import { createSelector } from 'reselect';

const getDog = ({ dog } = {}) => dog;
const getDogData = createSelector(getDog, ({ data = {} }) => data);
export const getDogLoading = createSelector(getDog, ({ loading }) => loading);
export const getDogError = createSelector(getDog, ({ error = '' }) => error);
export const getDogUrl = createSelector(getDogData, ({ message = '' }) => message);
