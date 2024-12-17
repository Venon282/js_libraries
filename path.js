import { BadVariable } from "../functions/functions";

class Path{
    /**
     * Joins different elements for create a path
     *
     * @param {...string} parts - The parts to join.
     * @returns {string} The joined string.
     */
    static join(...parts){
        return parts
                .flatMap(part => part.split(/[\/\\]/))  // split each parameters by / and \
                .filter(item => item !== '')            // remove the empty one
                .join('/')                              // separate them by a /
    }

    /**
     * Returns the base name of the file or directory from the given path.
     * @param {string} path - The path to extract the base name from.
     * @returns {string|boolean} The base name of the file or directory, or false if the path is invalid.
     */
    static basename(path){
        if(BadVariable(path))
            return false

        path = path.replace(/[\/\\]+$/,'')      // Remove the / and \ at the end of the string
        let split_path = path.split(/[\/\\]/)   // Separate it with / and \
        return split_path[split_path.length-1]  // Return the last element
    }

    /**
     * Checks if the given path corresponds to a directory.
     * @param {string} path - The path to check.
     * @returns {boolean} True if the path corresponds to a directory, otherwise false.
     */
    static isFolder(path){
        if(BadVariable(path))
            return false

        let basename = this.basename(path)
        return !basename.includes('.')
    }

    /**
     * Checks if the given path corresponds to a file.
     * @param {string} path - The path to check.
     * @returns {boolean} True if the path corresponds to a file, otherwise false.
     */
    static isFile(path){
        if(BadVariable(path))
            return false

        let basename = this.basename(path)
        return basename.includes('.')
    }
}

export default Path
