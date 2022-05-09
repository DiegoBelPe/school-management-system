const methodHTTP = () => {
  const customFetch = (endpoint, opt) => {
    const options = opt;
    const defaultHeader = {
      accept: 'application/json',
    };
    const controller = new AbortController();

    options.signal = controller.signal;

    options.method = options.method || 'GET';

    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    setTimeout(() => controller.abort(), 3000);
    return fetch(endpoint, options)
      // eslint-disable-next-line prefer-promise-reject-errors
      .then((res) => (res.ok ? res.json() : Promise.reject({
        err: true,
        status: res.status || '00',
        statusText: res.statusText || 'Ocurrió un error',
      })))
      .catch((err) => err);
  };
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, opt = {}) => {
    const options = opt;

    options.method = 'POST';
    return customFetch(url, options);
  };

  const patch = (url, opt = {}) => {
    const options = opt;
    options.method = 'PATCH';
    return customFetch(url, options);
  };

  const put = (url, opt = {}) => {
    const options = opt;
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url, opt = {}) => {
    const options = opt;
    options.method = 'DELETE';
    return customFetch(url, options);
  };
  return {
    get,
    post,
    put,
    del,
    patch,
  };
};

export default methodHTTP;
