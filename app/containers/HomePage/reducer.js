import produce from 'immer';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  GET_DUMMY_DATA,
  SET_DUMMY_DATA,
  ERROR_DUMMY_DATA,
  ERROR_POST,
  GET_POST,
  SET_POST,
} from './constants';

const DEFAULT_COUNTER = 0;
const DEFAULT_DATA = {};

export const initialState = {
  counter: DEFAULT_COUNTER,
  data: DEFAULT_DATA,
};

/* eslint-disable default-case, no-param-reassign */
const counterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT_COUNTER:
        draft.counter += 1;
        break;
      case DECREMENT_COUNTER:
        draft.counter =
          draft.counter === DEFAULT_COUNTER
            ? DEFAULT_COUNTER
            : (draft.counter -= 1);
        break;
      case GET_DUMMY_DATA:
        draft.loading = true;
        break;
      case SET_DUMMY_DATA:
        draft.data = action.data;
        draft.loading = false;
        draft.error = false;
        break;
      case ERROR_DUMMY_DATA:
        draft.error = true;
        break;
      case ERROR_POST:
        draft.error = true;
        break;
      case GET_POST:
        draft.error = false;
        draft.requestData = action.reqData;
        break;
      case SET_POST:
        draft.postedData = action.data;
        draft.error = false;
        break;
    }
  });

export default counterReducer;
