export const RESPONSE_REQUEST = 'RESPONSE_REQUEST';
export const RESPONSE_SUCCESS = 'RESPONSE_SUCCESS';
export const RESPONSE_FAILURE = 'RESPONSE_FAILURE';

export const responseRequest = () => ({
    type: RESPONSE_REQUEST
  });
  
  export const responseSuccess = ({ response }) => ({
    type: RESPONSE_SUCCESS,
    payload: {
        response
    }
  });
  
  export const responseFailure = ({ errorType }) => ({
    type: RESPONSE_FAILURE,
    payload: {
        errorType
    }
  });