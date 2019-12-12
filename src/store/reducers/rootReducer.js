import { combineReducers } from 'redux';
import generateStore from '../store';
import responseReducer from './response/responseReducer';

const createReducers = () => {
    const rootReducer = combineReducers({
        response: responseReducer
    })

    return generateStore(rootReducer)
}

export default createReducers
