import Client from './Client'

const ENDPOINT = 'photos'

export default class PhotoAPI extends Client {
  static get(id) {
    return super.get(ENDPOINT + (id ? `/${id}` : ''))
  }
}
