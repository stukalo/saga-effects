import { fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* fn(value) {
  while(true){
      yield delay(1000);
      console.log('fn', value);
  }
}

export function* forkSaga(){
    console.log('forkSaga started');
    let i = 0;
    while(true){
        yield delay(2000);
        yield fork(fn, i++);
    }
}