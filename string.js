// import { Text } from "react-native";
// import reactStringReplace from 'react-string-replace'

class MyString extends String {
    static require(name){
        return '*'+name
    }

    // static formating(text, subStyles = {}, subOnPress = () => {}) {
    //     const replacements = [
    //         { regex: /<b>(.*?)<\/b>/g, component: (match, i) => <Text key={'b_' + i} onPress={subOnPress['b_' + i] || subOnPress.b} style={{ fontWeight: 'bold',               ...(subStyles['b_' + i] || subStyles.b)}}>{match.trim()}</Text> },
    //         { regex: /<i>(.*?)<\/i>/g, component: (match, i) => <Text key={'i_' + i} onPress={subOnPress['i_' + i] || subOnPress.i} style={{ fontStyle: 'italic',              ...(subStyles['i_' + i] || subStyles.i)}}>{match.trim()}</Text> },
    //         { regex: /<u>(.*?)<\/u>/g, component: (match, i) => <Text key={'u_' + i} onPress={subOnPress['u_' + i] || subOnPress.u} style={{ textDecorationLine: 'underline',  ...(subStyles['u_' + i] || subStyles.u)}}>{match.trim()}</Text> },
    //         { regex: /<br\s?\/?>/g,    component: (match, i) => <Text key={'br_'+ i}>{'\n'}</Text> }
    //     ]

    //     let formattedText = text;
    //     replacements.forEach(({ regex, component }) => {
    //         formattedText = reactStringReplace(formattedText, regex, component);
    //     })

    //     return formattedText
    // }

    /**
     * Transforms the given text based on the specified verification type.
     *
     * @param {string} text - The text to be transformed.
     * @param {string|null} verification - The type of transformation to apply.
     * Can be one of the following: 'all', 'int', 'integer', 'numeric', 'digit',
     * 'float', 'real', 'double', 'str', 'string', 'text', 'alpha', 'alphabetic',
     * 'alnum', 'alphanumeric', 'hex', 'hexadecimal', 'binary', 'octal', 'currency',
     * 'percent', or null.
     * @returns {string} The transformed text according to the specified verification type.
     * - 'int', 'integer', 'numeric', 'digit': Removes all non-digit characters.
     * - 'float', 'real', 'double': Formats as a decimal number.
     * - 'str', 'string', 'text': Allows only alphanumeric characters.
     * - 'alpha', 'alphabetic': Allows only alphabetic characters.
     * - 'alnum', 'alphanumeric': Allows only alphanumeric characters.
     * - 'hex', 'hexadecimal': Allows only hexadecimal characters.
     * - 'binary': Allows only binary characters (0 and 1).
     * - 'octal': Allows only octal characters (0-7).
     * - 'currency': Removes all non-numeric characters except '.'.
     * - 'percent': Removes all non-numeric characters except '.' and '%'.
     * - Any other value: Returns the text unchanged.
     */
    static textTransformer(text, verification=null){
        switch (verification) {
            case null:
            case 'all':
                return text
            case 'int':
            case 'integer':
            case 'numeric':
            case 'digit':
                // Remove all non-digit characters
                return text.replace(/\D/g, '');
            case 'float':
            case 'real':
            case 'double':
                // Add '0' in front if text starts with '.' or ','
                if (/^[.,]/.test(text)) {
                    text = '0' + text;
                }
                // Replace ',' with '.'
                text = text.replace(/,/g, '.');
                // Remove all non-digit characters except '.'
                return text.replace(/[^\d.]/g, '');
            case 'str':
            case 'string':
            case 'text':
                // Allow only alphanumeric characters
                return text.replace(/[^a-zA-Z0-9]/g, '');
            case 'alpha':
            case 'alphabetic':
                // Allow only alphabetic characters
                return text.replace(/[^a-zA-Z]/g, '');
            case 'alnum':
            case 'alphanumeric':
                // Allow only alphanumeric characters
                return text.replace(/[^a-zA-Z0-9]/g, '');
            case 'hex':
            case 'hexadecimal':
                // Allow only hexadecimal characters
                return text.replace(/[^a-fA-F0-9]/g, '');
            case 'binary':
                // Allow only binary characters
                return text.replace(/[^01]/g, '');
            case 'octal':
                // Allow only octal characters
                return text.replace(/[^0-7]/g, '');
            case 'currency':
                // Remove all non-numeric characters except '.'
                return text.replace(/[^0-9.]/g, '');
            case 'percent':
                // Remove all non-numeric characters except '.' and '%'
                return text.replace(/[^0-9.%]/g, '');
            default:
                return text;
        }
    }

    static capitalize(text){
        return String(text).charAt(0).toUpperCase() + String(text).slice(1).toLowerCase()
    }
}

export default MyString
