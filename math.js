// TEST UNITAIRE
class Math{
    /**
     * Splits a number into its integer and decimal parts.
     *
     * @param {number} number - The number to split.
     * @returns {Array} An object containing the intPart and decimalPart of the number.
     */
    static modf(number){
        let solus = number.toString().split(/,|\./gm)   // Separate it by a . or the ,
        let intPart = parseFloat(solus[0])              // Get the int part as a float
        let decimalPart =  parseFloat("0." + solus[1])  // Get the decimal part
        return [intPart, decimalPart]
    }
}

export default Math
