import { takeEvery } from 'redux-saga/effects';

const process = (action) => {
  console.log('process is started', action.payload);
};

export function* takeEverySaga() {
    console.log('takeEverySaga started');
    yield takeEvery('START_PROCESS', process);
    console.log('takeEverySaga end');
}