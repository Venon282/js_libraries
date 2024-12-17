import * as _ from "./lodash.min.js"

class List extends Array{
    /**
     * Creates a nested array with the specified dimensions.
     *
     * @param {number|number[]} size - A single number or an array of numbers representing the dimensions of the nested array.
     * If a single number is provided, it creates a one-dimensional array of that size.
     * If an array is provided, it creates a nested array with the dimensions specified by the array elements.
     * @returns {Array} A nested array based on the given dimensions.
     *
     * @example
     * // Creates a 1-dimensional array with 3 elements
     * list(3); // Output: [ <3 empty items> ]
     *
     * @example
     * // Creates a 2-dimensional array with dimensions 2x3
     * list([2, 3]); // Output: [ [ <3 empty items>, <3 empty items> ] , [ <3 empty items>, <3 empty items> ] ]
     *
     * @example
     * // Creates a 3-dimensional array with dimensions 2x2x2
     * list([2, 2, 2]); // Output: [ [ [ <2 empty items>, <2 empty items> ], [ <2 empty items>, <2 empty items> ] ], [ [ <2 empty items>, <2 empty items> ], [ <2 empty items>, <2 empty items> ] ] ]
     */
    static list(size=0){
        if(Array.isArray(size)){
            let l = new Array(size[0])

            new_size = size.slice(1)
            if (new_size.length === 0)
                return l

            for(let i=0; i<size[0]; i++)
                l[i] = list(new_size)
        }else{
            return new Array(size)
        }
    }

    /**
     * Creates a nested array filled with the specified value and with the specified dimensions.
     *
     * @param {number|number[]} size - A single number or an array of numbers representing the dimensions of the nested array.
     * If a single number is provided, it creates a one-dimensional array of that size, filled with the specified value.
     * If an array is provided, it creates a nested array with the dimensions specified by the array elements, each filled with the specified value.
     * @param {*} [fill=null] - The value to fill the array with. Defaults to `null` if not provided.
     * @returns {Array} A nested array of the specified dimensions, filled with the given value.
     *
     * @example
     * // Creates a 1-dimensional array with 3 elements, all filled with `0`
     * full(3, 0); // Output: [0, 0, 0]
     *
     * @example
     * // Creates a 2-dimensional array with dimensions 2x3, all filled with `1`
     * full([2, 3], 1); // Output: [[1, 1, 1], [1, 1, 1]]
     *
     * @example
     * // Creates a 3-dimensional array with dimensions 2x2x2, all filled with `true`
     * full([2, 2, 2], true); // Output: [[[true, true], [true, true]], [[true, true], [true, true]]]
     */
    static full(size, fill=null){
        if(Array.isArray(size)){
            let l = new Array(size[0]).fill(fill)

            new_size = size.slice(1)
            if (new_size.length === 0)
                return l
            for(let i=0; i<size[0]; i++)
                l[i] = list(new_size)
        }else{
            return new Array(size).fill(fill)
        }
    }

    /**
     * Determines whether the provided object is an array.
     *
     * @param {*} object - The value to be checked.
     * @returns {boolean} True if the object is an array, false otherwise.
     *
     * @example
     * // Checks if the object is an array
     * isList([1, 2, 3]); // Output: true
     *
     * @example
     * // Checks if the object is not an array
     * isList({ key: 'value' }); // Output: false
     *
     * @example
     * // Checks if the object is a string
     * isList('hello'); // Output: false
     */
    static isList(object){
        return Array.isArray(object)
    }

    /**
     * Generates an array of numbers within a specified range.
     *
     * This function can be used in different ways depending on the number of arguments provided.
     *
     * @param {number} [from] - The starting value of the range.
     * @param {number} [to] - The end value of the range (exclusive).
     * @param {number} [step] - The step value between numbers in the range.
     *
     * @returns {number[]} An array of numbers in the specified range.
     *
     * @throws {Error} If an invalid number of arguments is provided.
     * @throws {Error} If the 'from' value is greater than the 'to' value in the two-argument form.
     *
     * @example
     * // Generates an array from 0 to 4
     * MyClass.range(5); // Output: [0, 1, 2, 3, 4]
     *
     * @example
     * // Generates an array from 2 to 5
     * MyClass.range(2, 5); // Output: [2, 3, 4]
     *
     * @example
     * // Generates an array from 1 to 10 with a step of 2
     * MyClass.range(1, 10, 2); // Output: [1, 3, 5, 7, 9]
     */
    static range(from, to, step){
        if(arguments.length === 1)
            return this.range1(to=from)
        else if(arguments.length === 2)
            return this.range2(from=from, to=to)
        else if(arguments.length === 3)
            return this.range3(from=from, to=to, step=step)
        else
            throw new Error('Invalid number of arguments')
    }

    /**
     * Generates an array from 0 to the specified value.
     *
     * @param {number} to - The end value of the range (exclusive).
     * @returns {number[]} An array of numbers from 0 to `to - 1`.
     *
     * @example
     * // Generates an array from 0 to 4
     * MyClass.range1(5); // Output: [0, 1, 2, 3, 4]
     */
    static range1(to){
        return [...Array(to).keys()]
    }

    /**
     * Generates an array from a specified starting value to an ending value.
     *
     * @param {number} from - The starting value of the range.
     * @param {number} to - The end value of the range (exclusive).
     * @returns {number[]} An array of numbers from `from` to `to - 1`.
     *
     * @throws {Error} If `from` is greater than `to`.
     *
     * @example
     * // Generates an array from 2 to 4
     * MyClass.range2(2, 5); // Output: [2, 3, 4]
     */
    static range2(from, to){
        if(from > to)
            throw new Error("The 'from' value must be less than or equal to the 'to' value.")
        return [...Array(to-from).keys()].map(n => n+from)
    }

    /**
     * Generates an array of numbers with a specified step size within a range.
     *
     * @param {number} from - The starting value of the range.
     * @param {number} to - The end value of the range (exclusive).
     * @param {number} step - The step size between numbers in the range.
     * @returns {number[]} An array of numbers from `from` to just below `to` with a step size of `step`.
     *
     * @example
     * // Generates an array from 1 to 9 with a step of 2
     * MyClass.range3(1, 10, 2); // Output: [1, 3,   5, 7, 9]
     */
    static range3(from, to, step){
        nb_values = Math.floor((to - from) / step)
        return [...Array(nb_values).keys()].map(n => from + n*step)
    }

    /**
     * Creates a deep copy of the given object.
     *
     * @param {Object} object - The object to be copied.
     * @returns {Object} A new object that is a deep copy of the provided object.
     */
    static copy(object){
        return _.cloneDeep(object)
    }
    /**
     * Swaps the elements at two specified indices in a given array.
     *
     * @param {Array} list - The array in which elements will be swapped.
     * @param {number} idx1 - The index of the first element to be swapped.
     * @param {number} idx2 - The index of the second element to be swapped.
     * @throws {Error} Throws an error if either index is out of bounds of the array.
     * @returns {Array} The array with the elements at the specified indices swapped.
     *
     * @example
     * // Swaps elements at indices 1 and 3 in the array
     * const arr = [10, 20, 30, 40];
     * swap(arr, 1, 3);
     * console.log(arr); // Output: [10, 40, 30, 20]
     *
     * @example
     * // Throws an error because index 5 is out of bounds
     * const arr = [1, 2, 3, 4];
     * swap(arr, 1, 5); // Error: Both index must be lower than the list length
     */
    static swap(list, idx1, idx2){
        if(list.length <= idx1 || list.length <= idx2)
            throw new Error('Both index must be lower than the list length')

        let temp = list[idx1]
        list[idx1] = list[idx2]
        list[idx2] = temp

        return list
    }

    /**
     * Shifts elements from one array into a new array based on a set of offsets.
     *
     * @param {number[]} set - An array of integers representing the offsets for each element in the `targ` array.
     * The length of `set` must match the length of `targ`.
     * @param {any[]} targ - The target array from which elements will be shifted based on the offsets in `set`.
     * The length of `targ` must match the length of `set`.
     * @returns {any[]} A new array where elements from `targ` are shifted according to the `set` array.
     *
     * @throws {Error} Throws an error if the lengths of `set` and `targ` do not match.
     *
     * @example
     * // Shifts elements with offsets [1, 0, 2] in the target array ['a', 'b', 'c']
     * shiftElements([1, -1, 0], ['a', 'b', 'c']);
     * // Output: [ 'b', 'a', 'c' ]
     *
     * @example
     * // Shifts elements with offsets [0, 0, 1] in the target array ['x', 'y', 'z']
     * shiftElements([0, 2, 0, -2], ['x', 'y', 'z', 'a']);
     * // Output: [ 'x', 'a', 'z', 'y' ]
     */
    static shiftElements(set, targ){
        if(set.length !== targ.length)
            throw new Error('The set and targ length have to be the same.')

        new_list = new Array(set.length)
        for(let i=0; i<set.length;i++){
            if(set[i] === 0){
                new_list[i] = targ[i]
            }else{
                new_list[i+set[i]] = targ[i]
            }
        }

        return new_list

    }

    /**
     * Computes the sum of all elements in the list.
     *
     * @param {number[]} list - An array of numbers to be summed.
     * @returns {number} The sum of all numbers in the list.
     *
     * @example
     * // Computes the sum of [1, 2, 3, 4]
     * sum([1, 2, 3, 4]); // Output: 10
     *
     * @example
     * // Computes the sum of [0, 0, 0]
     * sum([0, 0, 0]); // Output: 0
     */
    static sum(list){
        return list.reduce((partial, x) => partial + x, 0)
    }

    /**
     * Computes the result of subtracting all elements in the list from the first element.
     *
     * @param {number[]} list - An array of numbers where the first number is the initial value for subtraction.
     * @returns {number} The result of subtracting each subsequent number from the first number.
     *
     * @example
     * // Computes the result of 10 - 2 - 3
     * sub([10, 2, 3]); // Output: 5
     *
     * @example
     * // Computes the result of 0 - 0 - 0
     * sub([0, 0, 0]); // Output: 0
     */
    static sub(list){
        return list.reduce((partial, x) => partial - x, 0)
    }

    /**
     * Computes the result of dividing the first element by each subsequent element in the list.
     *
     * @param {number[]} list - An array of numbers where the first number is the dividend.
     * @returns {number} The result of dividing the first number by each subsequent number in the list.
     *
     * @example
     * // Computes the result of 100 / 2 / 5
     * div([100, 2, 5]); // Output: 10
     *
     * @example
     * // Computes the result of 10 / 2 / 1
     * div([10, 2, 1]); // Output: 5
     */
    static div(list){
        return list.reduce((partial, x) => partial / x, 0)
    }

    /**
     * Computes the product of all elements in the list.
     *
     * @param {number[]} list - An array of numbers to be multiplied.
     * @returns {number} The product of all numbers in the list.
     *
     * @example
     * // Computes the product of [2, 3, 4]
     * mul([2, 3, 4]); // Output: 24
     *
     * @example
     * // Computes the product of [1, 1, 1]
     * mul([1, 1, 1]); // Output: 1
     */
    static mul(list){
        return list.reduce((partial, x) => partial * x, 0)
    }

    /**
     * Adds a scalar value to each element in the list.
     *
     * @param {number[]} list - An array of numbers to which the scalar value will be added.
     * @param {number} n - The scalar value to add to each element of the list.
     * @returns {number[]} A new array with the scalar value added to each element of the input list.
     *
     * @example
     * // Adds 5 to each element in the array
     * sumByScalar([1, 2, 3], 5); // Output: [6, 7, 8]
     *
     * @example
     * // Adds -2 to each element in the array
     * sumByScalar([10, 20, 30], -2); // Output: [8, 18, 28]
     */
    static sumByScalar(list, n){
        return list.map((x) => x + n)
    }

    /**
     * Subtracts a scalar value from each element in the list.
     *
     * @param {number[]} list - An array of numbers from which the scalar value will be subtracted.
     * @param {number} n - The scalar value to subtract from each element of the list.
     * @returns {number[]} A new array with the scalar value subtracted from each element of the input list.
     *
     * @example
     * // Subtracts 3 from each element in the array
     * subByScalar([10, 20, 30], 3); // Output: [7, 17, 27]
     *
     * @example
     * // Subtracts -1 from each element in the array
     * subByScalar([5, 6, 7], -1); // Output: [6, 7, 8]
     */
    static subByScalar(list, n){
        return list.map((x) => x - n)
    }

    /**
     * Divides each element in the list by a scalar value.
     *
     * @param {number[]} list - An array of numbers to be divided by the scalar value.
     * @param {number} n - The scalar value to divide each element of the list by.
     * @returns {number[]} A new array with each element of the input list divided by the scalar value.
     *
     * @example
     * // Divides each element by 2
     * divByScalar([10, 20, 30], 2); // Output: [5, 10, 15]
     *
     * @example
     * // Divides each element by 0.5
     * divByScalar([1, 2, 3], 0.5); // Output: [2, 4, 6]
     */
    static divByScalar(list, n){
        return list.map((x) => x / n)
    }

    /**
     * Multiplies each element in the list by a scalar value.
     *
     * @param {number[]} list - An array of numbers to be multiplied by the scalar value.
     * @param {number} n - The scalar value to multiply each element of the list by.
     * @returns {number[]} A new array with each element of the input list multiplied by the scalar value.
     *
     * @example
     * // Multiplies each element by 3
     * mulByScalar([1, 2, 3], 3); // Output: [3, 6, 9]
     *
     * @example
     * // Multiplies each element by -2
     * mulByScalar([5, 10, 15], -2); // Output: [-10, -20, -30]
     */
    static mulByScalar(list, n){
        return list.map((x) => x * n)
    }

    /**
     * Computes the absolute value of each element in the list.
     *
     * @param {number[]} list - An array of numbers for which the absolute value will be calculated.
     * @returns {number[]} A new array with the absolute value of each element from the input list.
     *
     * @example
     * // Computes the absolute value of each element
     * abs([-1, 0, 1]); // Output: [1, 0, 1]
     *
     * @example
     * // Computes the absolute value for an array with mixed signs
     * abs([-10, 20, -30]); // Output: [10, 20, 30]
     */
    static abs(list){
        return list.map((x) => Math.abs(x))
    }

    static sortOnSubList(list, indexs=[0]){
        list.sort((a, b) => {
            for(index of indexs.slice(0, -1))
                if(a[index] !== b[index])
                    return a[index] - b[index] 

            return a[indexs[indexs.length-1]] - b[indexs[indexs.length-1]] 
        })
    }

}

export default List
