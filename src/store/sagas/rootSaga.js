import { spawn } from 'redux-saga/effects';
import { responseSaga } from './response/responseSaga';

export default function* rootSaga() {
    yield spawn(responseSaga);
}   