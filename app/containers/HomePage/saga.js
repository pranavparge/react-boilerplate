import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_DUMMY_DATA, GET_POST } from './constants';
import { setDummyData, errorDummyData, setPost, errorPost } from './actions';

export function* getDummyDataSaga() {
  const requestURL = `https://jsonplaceholder.typicode.com/todos/1`;
  try {
    const data = yield call(request, requestURL);
    yield put(setDummyData(data));
  } catch (err) {
    yield put(errorDummyData());
  }
}

export function* setDummyDataSaga() {
  const reqData = yield select(state => state.HomePage.requestData);
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  const init = {
    method: 'POST',
    body: JSON.stringify({
      title: reqData.title,
      body: reqData.post,
      userId: reqData.userId,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const data = yield call(request, requestURL, init);
    yield put(setPost(data));
  } catch (err) {
    yield put(errorPost());
  }
}

export default function* getDummyDataRootSaga() {
  yield takeLatest(GET_DUMMY_DATA, getDummyDataSaga);
  yield takeLatest(GET_POST, setDummyDataSaga);
}
