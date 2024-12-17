class Date{
    static month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    static month_names_3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    static day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    static day_names_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    /**
     * Returns the full name of the month based on the month index.
     * @param {number} month - The month index (0-11).
     * @returns {string} - The full name of the month.
     */
    static getMonthName(month){
        if(month>=0 && month<12) return this.month_names[month]
        else return ''
    }

    /**
     * Returns the abbreviated name of the month based on the month index.
     * @param {number} month - The month index (0-11).
     * @returns {string} - The abbreviated name of the month.
     */
    static getMonthName3(month){
        if(month>=0 && month<12) return this.month_names_3[month]
        else return ''
    }

    /**
     * Returns the full name of the day based on the day index.
     * @param {number} day - The day index (0-6).
     * @returns {string} - The full name of the day.
     */
    static getDayName(day){
        if(day>=0 && day<6) return this.day_names[day]
        else return ''
    }

    /**
     * Returns the abbreviated name of the day based on the day index.
     * @param {number} day - The day index (0-6).
     * @returns {string} - The abbreviated name of the day.
     */
    static getDayName3(day){
        if(day>=0 && day<6) return this.day_names_3[day]
        else return ''
    }

    /**
     * Formats a date object according to the provided format string.
     * If no format is specified, the default format 'YYYY/MM/DD' is used.
     * @param {Date} date - The date object to format.
     * @param {string} [format='YYYY/MM/DD'] - The format string.
     * @returns {string} - The formatted date string.
     */
    static format(date,format){
        if(!format) format = 'YYYY/MM/DD'

        return format.replace(/(?:yyyy|YYYY)/g,date.getFullYear())
                    .replace(/(?:yy|YY)/g, String(date.getFullYear()).substr(-2))
                    .replace(/DD/g,String(date.getDate()).padStart(2,'0'))
                    .replace(/D/g,date.getDate())
                    .replace(/HH/g,String(date.getHours()).padStart(2,'0'))
                    .replace(/H/g,date.getHours())
                    .replace(/hh/g,String(date.getHours() %12 || 12).padStart(2,'0'))
                    .replace(/h/g,date.getHours() %12 || 12)
                    .replace(/mm/g,String(date.getMinutes()).padStart(2,'0'))
                    .replace(/m/g,date.getMinutes())
                    .replace(/SS/g,String(date.getSeconds()).padStart(2,'0'))
                    .replace(/S/g,date.getSeconds())
                    .replace(/sss/g,String(date.getMilliseconds()).padStart(3,'0'))
                    .replace(/ss/g,String(date.getMilliseconds()).padStart(2,'0'))
                    .replace(/s/g,date.getMilliseconds())
                    .replace(/(?<!d)dd(?!d)/g,date.getDay())
                    .replace(/(?<!d)d(?!d)/g,date.getDay())
                    .replace(/dddd/g,this.getDayName(date.getDay()))
                    .replace(/ddd/g,this.getDayName3(date.getDay()))
                    .replace(/(?<!M)MM(?!M)/g,String(date.getMonth() +1).padStart(2,'0'))
                    .replace(/(?<!M)M(?!M)/g,date.getMonth() +1)
                    .replace(/MMMM/g,this.getMonthName(date.getMonth()))
                    .replace(/MMM/g,this.getMonthName3(date.getMonth()))
    }
}

export default Date
