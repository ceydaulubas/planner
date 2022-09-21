import axios from 'axios';

function useApi(apiUrl) {
  const makeRequest = async (url, type, body, config) => {
    config = config ?? {};

    try {
      if (type === 'GET') {
        return config ? await axios.get(url, config) : await axios.get(url);
      } else if (type === 'POST') {
        return config ? await axios.post(url, body, config) : await axios.post(url, body);
      }
    } catch (err) {
      return err;
    }
  };
  const get = async (url, config = {}) => {
    return await makeRequest(apiUrl + url, 'GET', null, config);
  };

  const post = async (url, body = {}, config = {}) => {
    return await makeRequest(apiUrl + url, 'POST', body, config);
  };

  return {
    get,
    post,
  };
}

export { useApi };
