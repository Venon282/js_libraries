// Static regex class with differents patterns propositions and js regex methods improvment
class Regex {
    // Return a regex pattern for a valid email
    static get email() {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
    // Return a regex pattern for a valid password
    static get password() {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }
    // Return a regex pattern for a valid phone number
    static get phone() {
        return /^\+?(\d{1,3})?[-. ]?\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/
    }
    // Return a regex pattern for a valid url
    static get url() {
        return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-z]{2,})(\.[a-z]{2,})?$/
    }
    // Return a regex pattern for a valid ip address
    static get ip() {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    }
    // Return a regex pattern for a valid date
    static get date() {
        return /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(19|20)\d{2}$/
    }
    // Return a regex pattern for a valid time
    static get time() {
        return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    }
    // Return a regex pattern for a valid date and time
    static get datetime() {
        return /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(19|20)\d{2} (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
    }
    // Return a regex pattern for a valid hex color
    static get hexColor() {
        return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
    }
    // Return a regex pattern for a valid slug
    static get slug() {
        return /^[a-z0-9-]+$/
    }
    // Return a regex pattern for a valid username
    static get username() {
        return /^[a-zA-Z0-9_]{5,}$/
    }
    // Return a regex pattern for a valid html tag
    static get htmlTag() {
        return /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
    }
    // Return a regex pattern for a valid html attribute
    static get htmlAttribute() {
        return /([a-z-]+)="([^"]*)"/g
    }
    // Return a regex pattern for a valid css property
    static get cssProperty() {
        return /([a-z-]+):([^;]+);/g
    }
    // Return a regex pattern for a valid css color
    static get cssColor() {
        return /#?([a-f0-9]{6}|[a-f0-9]{3})/g
    }
    // Return a regex pattern for a valid css url
    static get cssUrl() {
        return /url\(([^)]+)\)/g
    }
    // Return a regex pattern for a valid css unit
    static get cssUnit() {
        return /(\d+)(px|em|rem|%)?/g
    }
    // Return a regex pattern for a valid css selector
    static get cssSelector() {
        return /([a-z-]+)([^{]+){([^}]+)}/g
    }
    // Return a regex pattern for a js import
    static get jsImport() {
        return /import ([a-zA-Z]+) from '([^']+)'/g
    }
    // Return a regex pattern for a whole js import
    static get jsImport() {
        return /import ([a-zA-Z]+) from '([^']+)'/g
    }
    // Return a regex pattern for a js export
    static get jsExport() {
        return /export (default )?function ([a-zA-Z]+)\(\)/g
    }
}

export default Regex
