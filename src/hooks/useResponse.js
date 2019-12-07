import { useState, useEffect } from 'react';
import events from '../services/endpoints';
import { get } from '../services/axiosAPI';

const useResponse = () => {
    const [response, updateResp] = useState(undefined);

    useEffect(() => {
        // http GET request
        get(events).then(resp => {
            updateResp(resp);
        });
    }, []);

    return response;
};

export { useResponse };