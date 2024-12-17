import { database } from '../firebase';
import { ref, set, child, get, onValue, update, remove, increment } from "firebase/database"

//increment permite to increment server side thread safe
class Database{
    static getRefGlobal(){
        return 'global/'
    }

    static getRefUsers(){
        return 'users/'
    }

    static async set(my_ref,datas){
        try{
            return await set(ref(database,my_ref),datas)
        }catch(error){
            throw error
        }
    }

    static async get(my_ref){
        //const dbRef = ref(database)
        return await get(child(ref(database), my_ref))
        // console.log(snapshot)
        // return snapshot.exists() ? snapshot.val() : null
    }

    static async on(my_ref){
        let data = null
        await onValue(ref(database, my_ref),(snapshot) => {
                // if (snapshot.exists()) {
                //     data =  snapshot.val();
                // }
                return snapshot
            })
        return data
    }

    // Go take the value in the cach
    static async once(my_ref){
        let data = null
        await onValue(ref(database, my_ref),(snapshot) => {
                // if (snapshot.exists()) {
                //     data =  snapshot.val();
                // }
                return snapshot
            }, {
                onlyOnce: true
            })
        return data
    }

    // updates is a dictionnary with the ref as key and the value as value
    static async update(updates){
        try{
            return await update(ref(database), updates)
        }catch(error){
            throw error
        }
    }

    static async remove(my_ref){
        return await remove(ref(database,my_ref))
    }
}

export default Database
