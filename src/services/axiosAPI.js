import axios from 'axios';

const get = async (url, config) => {
  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (err) {
    throw err;
    
  }
};

export { get }