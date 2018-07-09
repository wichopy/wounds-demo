class Network {
  get = endpoint => {
    return fetch('wounds-api' + endpoint).then(response => response.json());
  };

  patch = (endpoint, payload) => {
    return fetch('wounds-api' + endpoint, {
      body: JSON.stringify(payload),
      method: "PATCH"
    }).then(response => response.json());
  };
}

export default new Network();
