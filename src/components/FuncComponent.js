import React from 'react';
import { useResponse } from '../hooks/useResponse';


const FuncComponent = () => {
    const resp = useResponse();
    console.log("resp", resp);

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


export default FuncComponent;