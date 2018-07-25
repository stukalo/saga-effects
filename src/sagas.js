import { all, fork } from 'redux-saga/effects';

import { allSaga } from './examples/allSaga';

const sagas = [
    allSaga
];

export default function* watchRootSaga() {
    yield all(sagas.map(fork));
}