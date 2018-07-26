import { takeEvery, call, apply } from 'redux-saga/effects';

export function* requestSaga(){
    console.log('requestSaga started');
    yield takeEvery('SEND_REQUEST', onSendRequest);
}

export function* onSendRequest(action){
    console.log('onSendRequest', action.payload);
    let resp = yield call(fetch, 'http://httpbin.org/ip');
    const data = yield apply(resp, resp.json);
    console.log('resp: ', data);
}
