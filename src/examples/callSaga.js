import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const foo = (value) => {
    console.log('foo', value);
};

export function* callSaga() {
    console.log('callSaga started');
    yield delay(5000);
    yield call(foo, 'bar');
    console.log('callSaga is finished');
}