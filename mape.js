import List from "./list"

class Mape{
    static map(size, keys=null, value=null){
        keys = this.initKeys(size, keys)
        new_map = new Map()

        keys.forEach((key) => this.map.set(key, value))

        return new_dict
    }

    static initKeys(size, keys=null, warn=true){
        if(keys===null)
            return List.range(size)

        if(keys.length < size){
            if(warn)
                console.warn('The keys length is inferior to the object length. ' + keys.length + '->' +object.length)

            return keys.concat(List.range(object.length - keys.length))
        }

        return keys

    }

    static indexOf(object, key){
        for(const [index, key_curr] of object.entries())
            if(key_curr === key)
                return index
        return -1
    }

    static getKey(object, idx){
        return Array.from(object.keys())[idx]
    }

    static swap(object, key1, key2){

    }
}

export default Mape
