import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useResponse } from '../hooks/redux/useResponse';
import { responseRequest } from '../store/actions/responseActions';


const ComponentReduxHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(responseRequest())
      }, [])

    const resp = useSelector(state => {
        console.log("state redux hooks", state);
        return state.response
    });

    return (
        <>
            {
                resp !== undefined && Object.keys(resp).map(key => {
                    const { id, title, type } = resp[key];
                    return <p key={id}>{title} = {type}</p>
                })
            }
        </>
    );
}


export default ComponentReduxHook;