import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  GET_DUMMY_DATA,
  SET_DUMMY_DATA,
  ERROR_DUMMY_DATA,
  GET_POST,
  SET_POST,
  ERROR_POST,
} from './constants';

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function getDummyData() {
  return {
    type: GET_DUMMY_DATA,
  };
}

export function setDummyData(data = {}) {
  return {
    type: SET_DUMMY_DATA,
    data,
  };
}

export function errorDummyData() {
  return {
    type: ERROR_DUMMY_DATA,
  };
}

export function getPost(data) {
  return {
    type: GET_POST,
    reqData: data,
  };
}

export function setPost(data) {
  return {
    type: SET_POST,
    data,
  };
}

export function errorPost() {
  return {
    type: ERROR_POST,
  };
}
