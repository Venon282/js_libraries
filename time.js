import Math from "./math"

class Time{
    /**
     * Converts milliseconds to seconds.
     *
     * @param {number} milli - The time in milliseconds.
     * @returns {number} The time in seconds.
     *
     * @example
     * // Convert 3000 milliseconds to seconds
     * TimeConversion.milliToSec(3000); // Output: 3
     */
    static milliToSec(milli){
        return milli/1000
    }

    /**
     * Converts milliseconds to minutes.
     *
     * @param {number} milli - The time in milliseconds.
     * @returns {number} The time in minutes.
     *
     * @example
     * // Convert 180000 milliseconds to minutes
     * TimeConversion.milliToMin(180000); // Output: 3
     */
    static milliToMin(milli){
        return this.milliToSec(milli)/60
    }

    /**
     * Converts milliseconds to hours.
     *
     * @param {number} milli - The time in milliseconds.
     * @returns {number} The time in hours.
     *
     * @example
     * // Convert 7200000 milliseconds to hours
     * TimeConversion.milliToHours(7200000); // Output: 2
     */
    static milliToHours(milli){
        return this.milliToMin(milli)/60
    }

    /**
     * Converts milliseconds to days.
     *
     * @param {number} milli - The time in milliseconds.
     * @returns {number} The time in days.
     *
     * @example
     * // Convert 86400000 milliseconds to days
     * TimeConversion.milliToDays(86400000); // Output: 1
     */
    static milliToDays(milli){
        return this.milliToHours(milli)/24
    }

    /**
     * Converts seconds to milliseconds.
     *
     * @param {number} sec - The time in seconds.
     * @returns {number} The time in milliseconds.
     *
     * @example
     * // Convert 60 seconds to milliseconds
     * TimeConversion.secToMilli(60); // Output: 60000
     */
    static secToMilli(sec){
        return sec*1000
    }

    /**
     * Converts seconds to minutes.
     *
     * @param {number} sec - The time in seconds.
     * @returns {number} The time in minutes.
     *
     * @example
     * // Convert 120 seconds to minutes
     * TimeConversion.secToMin(120); // Output: 2
     */
    static secToMin(sec){
        return sec/60
    }

    /**
     * Converts seconds to hours.
     *
     * @param {number} sec - The time in seconds.
     * @returns {number} The time in hours.
     *
     * @example
     * // Convert 3600 seconds to hours
     * TimeConversion.secToHours(3600); // Output: 1
     */
    static secToHours(sec){
        return this.secToMin(sec)/60
    }

    /**
     * Converts seconds to days.
     *
     * @param {number} sec - The time in seconds.
     * @returns {number} The time in days.
     *
     * @example
     * // Convert 86400 seconds to days
     * TimeConversion.secToDays(86400); // Output: 1
     */
    static secToDays(sec){
        return this.secToHours(sec)/24
    }

    /**
     * Converts minutes to milliseconds.
     *
     * @param {number} mins - The time in minutes.
     * @returns {number} The time in milliseconds.
     *
     * @example
     * // Convert 5 minutes to milliseconds
     * TimeConversion.minToMilli(5); // Output: 300000
     */
    static minToMilli(mins){
        return this.minToSec(mins)*1000
    }

    /**
     * Converts minutes to seconds.
     *
     * @param {number} mins - The time in minutes.
     * @returns {number} The time in seconds.
     *
     * @example
     * // Convert 10 minutes to seconds
     * TimeConversion.minToSec(10); // Output: 600
     */
    static minToSec(mins){
        return mins*60
    }

    /**
     * Converts minutes to hours.
     *
     * @param {number} mins - The time in minutes.
     * @returns {number} The time in hours.
     *
     * @example
     * // Convert 120 minutes to hours
     * TimeConversion.minToHours(120); // Output: 2
     */
    static minToHours(mins){
        return mins/60
    }

    /**
     * Converts minutes to days.
     *
     * @param {number} mins - The time in minutes.
     * @returns {number} The time in days.
     *
     * @example
     * // Convert 2880 minutes to days
     * TimeConversion.minToDays(2880); // Output: 2
     */
    static minToDays(mins){
        return this.minToHours(mins)/24
    }

    /**
     * Converts hours to milliseconds.
     *
     * @param {number} hours - The time in hours.
     * @returns {number} The time in milliseconds.
     *
     * @example
     * // Convert 2 hours to milliseconds
     * TimeConversion.hourToMilli(2); // Output: 7200000
     */
    static hourToMilli(hours){
        return this.hourToSec(hours)*1000
    }

    /**
     * Converts hours to seconds.
     *
     * @param {number} hours - The time in hours.
     * @returns {number} The time in seconds.
     *
     * @example
     * // Convert 3 hours to seconds
     * TimeConversion.hourToSec(3); // Output: 10800
     */
    static hourToSec(hours){
        return this.hourToMin(hours)*60
    }

    /**
     * Converts hours to minutes.
     *
     * @param {number} hours - The time in hours.
     * @returns {number} The time in minutes.
     *
     * @example
     * // Convert 4 hours to minutes
     * TimeConversion.hourToMin(4); // Output: 240
     */
    static hourToMin(hours){
        return hours*60
    }

    /**
     * Converts hours to days.
     *
     * @param {number} hours - The time in hours.
     * @returns {number} The time in days.
     *
     * @example
     * // Convert 48 hours to days
     * TimeConversion.hourToDays(48); // Output: 2
     */
    static hourToDays(hours){
        return hours/24
    }

    /**
     * Converts days to milliseconds.
     *
     * @param {number} days - The time in days.
     * @returns {number} The time in milliseconds.
     *
     * @example
     * // Convert 5 days to milliseconds
     * TimeConversion.dayToMilli(5); // Output: 432000000
     */
    static dayToMilli(days){
        return this.dayToSec(days)*1000
    }

    /**
     * Converts days to seconds.
     *
     * @param {number} days - The time in days.
     * @returns {number} The time in seconds.
     *
     * @example
     * // Convert 2 days to seconds
     * TimeConversion.dayToSec(2); // Output: 172800
     */
    static dayToSec(days){
        return this.dayToMin(days)*60
    }

    /**
     * Converts days to minutes.
     *
     * @param {number} days - The time in days.
     * @returns {number} The time in minutes.
     *
     * @example
     * // Convert 3 days to minutes
     * TimeConversion.dayToMin(3); // Output: 4320
     */
    static dayToMin(days){
        return this.dayToHours(days)*60
    }

    /**
     * Converts days to hours.
     *
     * @param {number} days - The time in days.
     * @returns {number} The time in hours.
     *
     * @example
     * // Convert 7 days to hours
     * TimeConversion.dayToHours(7); // Output: 168
     */
    static dayToHours(days){
        return days*24
    }

    /**
     * Converts a given number of seconds into a time object.
     * @param {number} sec - The number of seconds to convert.
     * @returns {object} An object representing the time with properties for days, hours, minutes, seconds, and milliseconds.
     */
    static secToTime(sec){
        const [days_i, days_d] = Math.modf(this.secToDays(sec))
        const [hours_i, hours_d] = Math.modf(this.dayToHours(days_d))
        const [min_i, min_d] = Math.modf(this.hourToMin(hours_d))
        let [sec_i, sec_d] = Math.modf(this.minToSec(min_d))
        let ms = Math.round(this.secToMilli(sec_d))
        if(ms==1000){
            sec_i+=1
            ms=0
        }
        return {"d":parseInt(days_i),"h":parseInt(hours_i),"m":parseInt(min_i),"s":parseInt(sec_i),"ms":parseInt(ms)}
    }
}

export default Time
