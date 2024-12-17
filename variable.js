class Variable{
    /**
     * Checks if a variable is considered bad (undefined, null, empty string, false, or zero).
     * @param {*} variable - The variable to check.
     * @returns {boolean} 'true' if the variable is bad, 'false' otherwise.
     */
    static isBad(variable){
        return (variable === undefined || variable === null || variable ==='' || variable === false || variable === 0)
    }
}