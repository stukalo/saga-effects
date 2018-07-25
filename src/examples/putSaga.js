import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* putSaga() {
    console.log('putSaga started');
    yield delay(5000);
    console.log('putSaga is going to put');
    yield put({type: 'SET_STATE', payload: 'new state from put saga'});
    console.log('putSaga is finished');
}