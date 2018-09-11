import { put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* fetchData() {
  const json = {
    title: 'DATA',
    description: 'This is return data',
    comment: 'redux-saga example',
  }
  yield delay(3000)
  yield put({ type: "DATA_RECEIVED", json: json, })
}
function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchData)
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ])
}