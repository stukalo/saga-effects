import { all, fork } from 'redux-saga/effects';
import { requestSaga } from "./examples/requestSaga";

const sagas = [
    requestSaga
];

export default function* watchRootSaga() {
    yield all(sagas.map(fork));
}