export default class APIClient {
  static async get(endpoint) {
    const res = await fetch(process.env.API_URL + endpoint)
    if (!res.ok) {
      throw new Error("Fetch response was not ok.")
    }
    return await res.json()
  }
}
