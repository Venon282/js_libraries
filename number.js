class Number{
    static randomInt(max, min=0){
        const min = Math.ceil(min);
        const max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}