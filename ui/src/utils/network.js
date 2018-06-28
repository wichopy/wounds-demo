class Network {
  get = endpoint => {
    return fetch(endpoint).then(response => response.json());
  };

  patch = (endpoint, payload) => {
    return fetch(endpoint, {
      body: JSON.stringify(payload),
      method: "PATCH"
    }).then(response => response.json());
  };
}

export default new Network();
