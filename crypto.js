import { resolve } from "react-native-path"
import { GetRandomInt } from "../functions/functions"
class Crypto{
    static base64 = 'ARizBSj0CTk1DUl2EVm3FWn4GXo5HYp6IZq7Jar8Kbs9Lct+Mdu/NevOfwPgxQhy'

    /**
     * Generates a random base64 string of a specified length.
     *
     * @param {number} length - The length of the random string to generate.
     * @returns {string} A random base64 string.
     */
    static getRandomBase64String(length=16){
        let str = ""
        for(let i=0;i<length;i++)
            str+=this.base64[GetRandomInt(64)]
        return str
    }
}

export default Crypto
