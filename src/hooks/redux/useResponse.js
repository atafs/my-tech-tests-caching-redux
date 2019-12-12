import { useSelector } from 'react-redux'

const useResponse = () => {
    return useSelector(state => {
        console.log("state in redux", state);
        return state.response
    });
};

export { useResponse };