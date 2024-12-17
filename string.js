import { Text } from "react-native";
import reactStringReplace from 'react-string-replace'

class String{
    static require(name){
        return '*'+name
    }

    static formating(text, subStyles = {}, subOnPress = () => {}) {
        const replacements = [
            { regex: /<b>(.*?)<\/b>/g, component: (match, i) => <Text key={'b_' + i} onPress={subOnPress['b_' + i] || subOnPress.b} style={{ fontWeight: 'bold',               ...(subStyles['b_' + i] || subStyles.b)}}>{match.trim()}</Text> },
            { regex: /<i>(.*?)<\/i>/g, component: (match, i) => <Text key={'i_' + i} onPress={subOnPress['i_' + i] || subOnPress.i} style={{ fontStyle: 'italic',              ...(subStyles['i_' + i] || subStyles.i)}}>{match.trim()}</Text> },
            { regex: /<u>(.*?)<\/u>/g, component: (match, i) => <Text key={'u_' + i} onPress={subOnPress['u_' + i] || subOnPress.u} style={{ textDecorationLine: 'underline',  ...(subStyles['u_' + i] || subStyles.u)}}>{match.trim()}</Text> },
            { regex: /<br\s?\/?>/g,    component: (match, i) => <Text key={'br_'+ i}>{'\n'}</Text> }
        ]

        let formattedText = text;
        replacements.forEach(({ regex, component }) => {
            formattedText = reactStringReplace(formattedText, regex, component);
        })

        return formattedText
    }
}

export default String
