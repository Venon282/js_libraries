import { file } from "../file";

test('uniqueName', (nb = 50000) => {
    let names = new Set()
    for(let i = 0; i<nb; i++)
        names.add(file.uniqueName('file.txt'))
    expect(names.size).toBe(nb)
 })

 test('getNameAndExtention normal', () => {
    expect(file.getNameAndExtension('file.txt')).toEqual(['file','txt'])
 })

 test('getNameAndExtention in a path', () => {
    expect(file.getNameAndExtension('file.txt')).toEqual(['file','txt'])
 })

 test('getNameAndExtention nothing', () => {
    expect(file.getNameAndExtension('')).toEqual(['',''])
 })
 test('getNameAndExtention _', () => {
    expect(file.getNameAndExtension('_.txt')).toEqual(['_','txt'])
 })
 test('getNameAndExtention no extension', () => {
    expect(file.getNameAndExtension('file.')).toEqual(['file',''])
 })
 test('getNameAndExtention no name file', () => {
    expect(file.getNameAndExtension('.txt')).toEqual(['','txt'])
 })


//  getNameAndExtention(name){
//     if(!path.isFile(name))
//         return false

//     name = path.basename(name)
//     let name_parts = name.split('.')
//     let extention = name_parts.pop()
//     name = name_parts.join('.')
//     return {name,extention}
// }
