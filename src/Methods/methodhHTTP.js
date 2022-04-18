// eslint-disable-next-line import/prefer-default-export
export const methodHTTP = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    };
    const controller = new AbortController();
    // eslint-disable-next-line no-param-reassign
    options.signal = controller.signal;
    // eslint-disable-next-line no-param-reassign
    options.method = options.method || 'GET';
    // eslint-disable-next-line no-param-reassign
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    // eslint-disable-next-line no-param-reassign
    options.body = JSON.stringify(options.body) || false;
    // eslint-disable-next-line no-param-reassign
    if (!options.body) delete options.body;
    setTimeout(() => controller.abort(), 3000);
    return fetch(endpoint, options)
      // eslint-disable-next-line no-confusing-arrow
      .then((res) => res.ok
        ? res.json()
        // eslint-disable-next-line prefer-promise-reject-errors
        : Promise.reject({
          err: true,
          status: res.status || '00',
          statusText: res.statusText || 'Ocurrió un error',
        }))
      .catch((err) => err);
  };
  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    // eslint-disable-next-line no-param-reassign
    options.method = 'POST';
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    // eslint-disable-next-line no-param-reassign
    options.method = 'PUT';
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    // eslint-disable-next-line no-param-reassign
    options.method = 'DELETE';
    return customFetch(url, options);
  };
  return {
    get,
    post,
    put,
    del,
  };
};
