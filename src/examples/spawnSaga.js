import { fork, spawn } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const process = function* () {
  let timesLooped = 0;
  while (true){
      console.log(`Looped ${timesLooped++} times`);
      yield delay(1000);
  }
};

export function* spawnSaga(){
    yield fork(process);
    // yield spawn(process);
    yield delay(5000);
    throw new Error();
}