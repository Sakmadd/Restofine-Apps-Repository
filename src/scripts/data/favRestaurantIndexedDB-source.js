import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteRestaurantIndexedDB = {
  async getRestaurant (id) {
    if (!id) {
      return
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getAllRestaurants () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putRestaurant (restaurant) {
    if (!this._isValidRestaurant(restaurant)) {
      return
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },
  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  },
  _isValidRestaurant (restaurant) {
    return restaurant && typeof restaurant === 'object' && 'id' in restaurant
  }

}

export default FavoriteRestaurantIndexedDB
