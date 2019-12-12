import { all, call, put, takeLatest } from 'redux-saga/effects';

import { 
    responseSuccess, 
    responseFailure, 
    RESPONSE_REQUEST
} from '../../actions/responseActions';
import { get } from '../../../services/axiosAPI';
import { getEvents as events } from '../../../services/endpoints';

export function* responseSaga() {
    try {
        const response = yield call(get, events);
        console.log(response);

      yield put(responseSuccess({ response }));
    } catch (err) {
        console.log('I AM HERE');

        yield put(responseFailure({ errorType: err }));
    }
  }

  export default function* root() {
    yield all([
        yield takeLatest(RESPONSE_REQUEST, responseSaga)
    ]);
  }