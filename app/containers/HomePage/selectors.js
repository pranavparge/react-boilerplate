import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.HomePage || initialState;

const makeSelectCounter = () =>
  createSelector(
    selectHome,
    HomeState => HomeState.counter,
  );

const makeSelectData = () =>
  createSelector(
    selectHome,
    HomeState => HomeState.data,
  );

export { selectHome, makeSelectCounter, makeSelectData };
