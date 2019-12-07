import * as actions from '../../actions/responseActions';

import {
    INITIAL_STATE,
    responseRequest,
    responseSuccess,
    responseFailure
} from '../response/responseReducer';

describe(responseRequest, () => {
    it('should set isFetching to true', () => {
        const expectedState = {
            ...INITIAL_STATE,
            isFetching: true
        };

        const resultState = responseRequest(INITIAL_STATE);
        expect(resultState).toEqual(expectedState);
    });
});

describe(responseSuccess, () => {
    it('should set isFetching to false and have a response', () => {
        const previousState = {
            ...INITIAL_STATE,
            isFetching: true
          };

        const response = [{ id: 1 }, { id: 2 }];

        const expectedState = {
            ...INITIAL_STATE,
            isFetching: false,
            response
        };

        const action = actions.responseSuccess({ response });

        const resultState = responseSuccess(previousState, action);
        expect(resultState).toEqual(expectedState);
    });
});

describe(responseFailure, () => {
    it('should set isFetching to true', () => {
        const previousState = {
            ...INITIAL_STATE,
            isFetching: true
        };

        const errorType = actions.RESPONSE_FAILURE;

        const expectedState = {
            ...INITIAL_STATE,
            isFetching: false,
            errorType,
            error: true
        };

        const action = actions.responseFailure({ errorType });

        const resultState = responseFailure(previousState, action);
        expect(resultState).toEqual(expectedState);
    });
});