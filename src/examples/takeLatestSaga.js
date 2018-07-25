import { takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* process() {
    let timesLooped = 0;
    while(true){
        console.log(`Looped ${timesLooped++} times`);
        yield delay(1000);
    }
}

export function* takeLatestSaga(){
    yield takeLatest('START_PROCESS', process);
}