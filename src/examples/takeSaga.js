import { take } from 'redux-saga/effects';

export function* takeSaga () {
    console.log('takeSaga started');
    const state = yield take('SET_STATE');
    console.log('takeSaga got state', state);
    console.log('takeSaga is finished');
}