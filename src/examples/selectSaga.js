import { select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const simpleSelector = (state) => state.data;

export  function* selectSaga() {
    console.log('selectSaga started');
    yield delay(1000);
    const state = yield select(simpleSelector);
    console.log('data items', state);
    console.log('selectedSaga is finished');
}