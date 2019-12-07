import { createReducer } from 'reduxsauce';

import {
    RESPONSE_REQUEST,
    RESPONSE_SUCCESS,
    RESPONSE_FAILURE
} from '../../actions/responseActions';

export const INITIAL_STATE = {
    response: null,
    isFetching: false,
    error: false,
    errorType: null
};

export const responseRequest = (state = INITIAL_STATE) => {
    return {
      ...state,
      isFetching: true,
      error: false,
      errorType: null
    };
  };
  
  export const responseSuccess = (state = INITIAL_STATE, action) => {
    const {
      payload: { response }
    } = action;
  
    return {
      ...state,
      response,
      isFetching: false,
      error: false,
      errorType: null
    };
  };
  
  export const responseFailure = (state = INITIAL_STATE, action) => {
    const {
      payload: { errorType }
    } = action;
  
    return {
      ...state,
      isFetching: false,
      error: true,
      errorType
    };
  };

export default createReducer(INITIAL_STATE, {
    [RESPONSE_REQUEST]: responseRequest,
    [RESPONSE_SUCCESS]: responseSuccess,
    [RESPONSE_FAILURE]: responseFailure
  });