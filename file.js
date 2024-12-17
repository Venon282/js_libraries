import Crypto from "./crypto";
import Path from "./path";
import Date from "./date";

class File{
    /**
    * Generates a unique name for a file based on the provided parameters.
    *
    * @param {string} name - The name of the file.
    * @param {number} id - The ID for generating uniqueness. Default is 5.
    * @returns {string} A unique name for the file or empty string if the given nameis not a file
    */
    static uniqueName(name,id=5){
        if(!Path.isFile(name))
            return ''

        const [file_name, file_extension] = this.getNameAndExtension(name)
        const timestamp = Date.format(new Date(Date.now()),"DD_MM_YYYY HH:mm:SS.sss")

        id = Crypto.getRandomBase64String(id).replace('\/','-')

        return`${timestamp}_${id}.${file_extension}`;
    }

    /**
     * Retrieves the name and extension from a file name.
     *
     * @param {string} name - The file name including extension.
     * @returns {Array} An array containing the file name and extension.
     */
    static getNameAndExtension(name){
        if(!Path.isFile(name))
            return ['','']

        name = Path.basename(name)          // Get the basename in case it's a path
        let name_parts = name.split('.')    // Separate them by the dots
        let extension = name_parts.pop()    // remove the last element from name_parts but save it in extension
        name = name_parts.join('.')         // get the file name
        return [name,extension]
    }

}

export default File
