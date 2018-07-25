import { take, all } from 'redux-saga/effects';

export function* allSaga() {
    console.log('allSaga started');
    yield all([
        take('FIRST_ACTION'),
        take('SECOND_ACTION')
    ]);
    console.log('allSaga resumes and finish it work');
}