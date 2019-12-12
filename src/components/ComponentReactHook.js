import React from 'react';
import { useResponse } from '../hooks/react/useResponse';

const ComponentReactHook = () => {
    const resp = useResponse();
    console.log("resp react hooks", resp);

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


export default ComponentReactHook;