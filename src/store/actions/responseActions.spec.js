import {
    responseRequest,
    responseSuccess,
    responseFailure,
    RESPONSE_REQUEST,
    RESPONSE_SUCCESS,
    RESPONSE_FAILURE
} from './responseActions';

describe('Comments Action Creators', () => {
    describe(responseRequest.name, () => {
      it('should return the correct action', () => {
        const action = responseRequest();
        expect(action).toEqual({
          type: RESPONSE_REQUEST
        });
      });
    });
  
    describe(responseSuccess.name, () => {
      it('should return the correct action', () => {
        const response = [{ id: 1 }, { id: 2 }];
        const action = responseSuccess({ response });
        expect(action).toEqual({
          type: RESPONSE_SUCCESS,
          payload: {
            response
          }
        });
      });
    });

    describe(responseFailure.name, () => {
      it('should return the correct action', () => {
        const error = true;
        const errorType = RESPONSE_FAILURE;
        const action = responseFailure({ errorType });
        expect(action).toEqual({
          type: RESPONSE_FAILURE,
          payload: {
            errorType
          }
        });
      });
    });
});