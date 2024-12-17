import List from "./list.js"
import * as _ from "./lodash.min.js"

class Dict{
    /**
     * Creates a dictionary (object) with specified keys and a default value.
     *
     * @param {number} size - The number of keys to initialize in the dictionary.
     * @param {Array<string>} [keys=null] - An optional array of keys to use. If not provided, default keys are generated.
     * @param {*} [value=null] - The value to assign to each key in the dictionary.
     * @returns {Object} A dictionary object with the specified keys and values.
     */
    static dict(size, keys=null, value=null){
        if (!Number.isInteger(size) || size < 0) {
            throw new Error('Size must be a non-negative integer');
        }

        keys = this.initKeys(size, keys)

        return keys.reduce((acc, key) => {
            acc[key] = value;
            return acc
        }, {})
    }

    static isDict(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    /**
     * Initializes a list of keys with a specified size. If the keys are provided, the function will use them; otherwise, it generates a range of keys.
     *
     * @param {number} size - The desired number of keys.
     * @param {Array} [keys=null] - An optional array of keys. If not provided, keys will be generated.
     * @param {boolean} [warn=true] - Flag to enable warnings if the provided keys are fewer than the specified size.
     * @returns {Array} An array of keys of the specified size. If the provided keys are fewer than the specified size, the function appends additional keys.
     */
    static initKeys(size, keys=null, warn=true){
        if(keys===null)
            return List.range(size)

        if(keys.length < size){
            if(warn)
                console.warn('The keys length is inferior to the size parameter. ' + keys.length + '->' +object.length)

            return keys.concat(List.range(object.length - keys.length))
        }

        return keys
    }

    /**
     * Converts an array into a dictionary using provided keys or default keys based on indices.
     *
     * @param {Array} object - The array to be converted into a dictionary.
     * @param {Array|null} keys - An optional array of keys to use for the dictionary. If null, numeric indices are used as keys.
     * @returns {Object} A dictionary with keys mapped to corresponding array values.
     */
    static list2dict(object, keys=null){
        keys = this.initKeys(object.length, keys)

        return object.reduce((acc, curr, index) => {
            acc[keys[index]] = curr
            return acc
        }, {})
    }

    /**
     * Extracts specified columns from a list of objects and organizes them into arrays.
     *
     * @param {Object[]} list - An array of objects from which columns will be extracted.
     * @param {string|string[]} col_names - The column names to extract. Can be a single column name or an array of column names.
     * @returns {Object} An object containing arrays of values for each specified column name.
     */
    static getObjectListCol(list, col_names) {
        // Check if col_names is an array, and if not, convert it to an array
        if (!Array.isArray(col_names)) {
            col_names = [col_names];
        }

        const result = {}

        col_names.forEach(col_name => {     // Iterate over each column name
            result[col_name] = []           // Create an empty array for the column


            list.forEach(item => {          // Iterate over each object in the list
                result[col_name].push(item[col_name])  // Push the value corresponding to the column name into the result array
            })
        })

        return result
    }

    /**
     * Creates a deep copy of the given object.
     *
     * @param {Object} object - The object to be deeply cloned.
     * @returns {Object} A deep copy of the provided object.
     */
    static copy(object){
        return _.cloneDeep(object)
    }

    /**
     * Retrieves the previous key-value pair in an object based on the provided key.
     *
     * @param {Object} object - The object from which to retrieve the previous key-value pair.
     * @param {string} key - The key for which to find the previous key-value pair.
     * @returns {[string|null, any|null]} An array containing the previous key and its value,
     *                                    or [null, null] if the key is the first in the object or doesn't exist.
     */
    static prev(object, key){
        const keys = Object.keys(object)            // Get the keys objcet
        const prev_idx_key = keys.indexOf(key) - 1  // Get the index of the next element
        const prev_key = keys[prev_idx_key]         // Get the next element
        return prev_key !== undefined ? [prev_key, object[prev_key]] : [null, null] // Return key value else null
    }

    /**
     * Retrieves the next key-value pair from the given object based on the provided key.
     *
     * @param {Object} object - The object from which the next key-value pair is to be retrieved.
     * @param {string} key - The current key to find the subsequent key-value pair for.
     * @returns {[string|null, any|null]} An array where the first element is the next key and the second
     * element is the corresponding value. If the next key does not exist, both elements are `null`.
     */
    static next(object, key){
        const keys = Object.keys(object)            // Get the keys objcet
        const next_idx_key = keys.indexOf(key) + 1  // Get the index of the next element
        const next_key = keys[next_idx_key]         // Get the next element
        return next_key !== undefined ? [next_key, object[next_key]] : [null, null] // Return key value else null
    }

    /**
     * Swaps the values associated with two keys in an object.
     *
     * @param {Object} object - The object whose keys' values are to be swapped.
     * @param {string} key1 - The first key whose value is to be swapped.
     * @param {string} key2 - The second key whose value is to be swapped.
     * @throws {Error} Throws an error if either key is not present in the object.
     * @returns {Object} The modified object with the values of the two keys swapped.
     */
    static swap(object, key1, key2){
        // Ensure the keys exist in the dictionary
        if (!(key1 in object) || !(key2 in object)) {
            throw new Error('Both keys must exist in the dictionary.');
        }

        let temp = object[key1]
        object[key1] = object[key2]
        object[key2] = temp

        return object
    }

    // static getCol(dict, keys){
    //     const res = new Array()
    //     if(!Array.isArray(keys))
    //         keys = [keys]
    //     for(const [_, value] in Object.entries(dict)){
            
    //         const sub_res = new Array()
    //         for(const key in keys){
    //             // if array index or dic col
    //             console.log(key, value)
    //             //console.log(typeof key === 'string', Dict.isDict(value), (key in value), key, value)
    //             if((Number.isInteger(key) && Array.isArray(value) && key>=0 && key<value.length) || 
    //                 (typeof key === 'string' && Dict.isDict(value) && key in value)
    //                 )
    //                     sub_res.push(value[key])
    //         }
    //         res.push(sub_res)
    //     }
    //     return res
    // }
}

export default Dict
