import { delay } from 'redux-saga';
import { fork, cancel, cancelled } from 'redux-saga/effects';


function* process(){
    try{
        while (true){
            console.log('process looped');
            yield delay(1000);
        }
    }finally {
        const isCancelled = yield cancelled();
        console.log('is process cancelled?', isCancelled);
    }
}

export function* cancelSaga(){
    console.log('cancelSaga started');
    const fn = yield fork(process);
    yield delay(5000);
    console.log('cancelSaga is going to stop process');
    yield cancel(fn);
    console.log('cancelSaga is finished');
}