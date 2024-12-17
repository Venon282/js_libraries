import AsyncStorage from '@react-native-async-storage/async-storage';
import Database from './database';
import Path from './path';

/**
 * Class encapsulating AsyncStorage functionalities.
 */
class Storage {
  /**
   * Fetches an item for a key.
   * @param {string} key Key of the item to fetch.
   * @returns {Promise<any>} A Promise that resolves to the item value if found, or null otherwise.
   * @example
   * const value = await Storage.get('myKey');
   * console.log(value); // Output: 'myValue'
   */
  static async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
      return null;
    }
  }

  static async getWithDatabase(key, ref) {
    let value = await Storage.get(key)
    if (value == null) {
        value = await Database.get(Path.join(ref, key))
        await Storage.set(key, value)
    }

    return value;
}


  /**
   * Sets the value for a key.
   * @param {string} key Key of the item to set.
   * @param {any} value Value to set for the key.
   * @example
   * await Storage.set('myKey', 'myValue');
   */
  static async set(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing data in AsyncStorage:', error);
    }
  }

  /**
   * Removes an item for a key.
   * @param {string} key Key of the item to remove.
   * @example
   * await Storage.remove('myKey');
   */
  static async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  }

  /**
   * Merges an existing key value with an input value.
   * @param {string} key Key of the item to modify.
   * @param {any} value New value to merge for the key.
   * @example
   * await Storage.merge('myKey', { newProp: 'newValue' });
   */
  static async merge(key, value) {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error merging data in AsyncStorage:', error);
    }
  }

  /**
   * Erases all AsyncStorage for all clients, libraries, etc.
   * @example
   * await Storage.clear();
   */
  static async clear() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }

  /**
   * Gets all keys known to the app.
   * @returns {Promise<string[]>} A Promise that resolves to an array of all keys found.
   * @example
   * const keys = await Storage.getAllKeys();
   * console.log(keys); // Output: ['key1', 'key2', ...]
   */
  static async getAllKeys() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.error('Error getting all keys from AsyncStorage:', error);
      return [];
    }
  }

  /**
   * Flushes any pending requests using a single batch call to get the data.
   * @example
   * await Storage.flushGetRequests();
   */
  static async flushGetRequests() {
    try {
      await AsyncStorage.flushGetRequests();
    } catch (error) {
      console.error('Error flushing get requests in AsyncStorage:', error);
    }
  }

  /**
   * Gets multiple items for the given keys.
   * @param {string[]} keys Array of keys for the items to get.
   * @returns {Promise<any[]>} A Promise that resolves to an array of key-value pairs.
   * @example
   * const items = await Storage.multiGet(['key1', 'key2']);
   * console.log(items); // Output: [['key1', 'value1'], ['key2', 'value2'], ...]
   */
  static async multiGet(keys) {
    try {
      const items = await AsyncStorage.multiGet(keys);
      return items.map(([key, value]) => [key, JSON.parse(value)]);
    } catch (error) {
      console.error('Error getting multiple items from AsyncStorage:', error);
      return [];
    }
  }

  /**
   * Sets multiple items at once.
   * @param {Array<[string, any]>} keyValuePairs Array of key-value pairs to set.
   * @example
   * await Storage.multiSet([['key1', 'value1'], ['key2', 'value2']]);
   */
  static async multiSet(keyValuePairs) {
    try {
      const pairs = keyValuePairs.map(([key, value]) => [key, JSON.stringify(value)]);
      await AsyncStorage.multiSet(pairs);
    } catch (error) {
      console.error('Error setting multiple items in AsyncStorage:', error);
    }
  }

  /**
   * Removes multiple items for the given keys.
   * @param {string[]} keys Array of keys for the items to remove.
   * @example
   * await Storage.multiRemove(['key1', 'key2']);
   */
  static async multiRemove(keys) {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error removing multiple items from AsyncStorage:', error);
    }
  }

  /**
   * Merges multiple items given by the key-value pairs.
   * @param {Array<[string, any]>} keyValuePairs Array of key-value pairs to merge.
   * @example
   * await Storage.multiMerge([['key1', { prop1: 'value1' }], ['key2', { prop2: 'value2' }]]);
   */
  static async multiMerge(keyValuePairs) {
    try {
      const pairs = keyValuePairs.map(([key, value]) => [key, JSON.stringify(value)]);
      await AsyncStorage.multiMerge(pairs);
    } catch (error) {
      console.error('Error merging multiple items in AsyncStorage:', error);
    }
  }
}

export default Storage;
