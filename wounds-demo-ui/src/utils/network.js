class Network {
  get = async endpoint => {
    const response = await fetch(endpoint)
    let result = await response.json()
    return result
  }
}

export default new Network()
