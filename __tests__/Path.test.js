import {path} from '../path'

test('join', () => {
    expect(path.join('jour','Bonsoir/CaVa//BienEtVous///etetet///','je','\\crois que\\\\ca va')).toBe('jour/Bonsoir/CaVa/BienEtVous/etetet/je/crois que/ca va')
})

test('basename file',() => {
    expect(path.basename('my/path/file.txt')).toBe('file.txt')
})

test('basename folder', () => {
    expect(path.basename('my/path/folder')).toBe('folder')
})

test('basename just a file',() => {
    expect(path.basename('file.txt')).toBe('file.txt')
})

test('basename folder /', () => {
    expect(path.basename('my/path/folder///\\')).toBe('folder')
})

test('isFolder file',() => {
    expect(path.isFolder('my/path/file.txt')).toBe(false)
})

test('isFolder folder', () => {
    expect(path.isFolder('my/path/folder')).toBe(true)
})

test('isFolder folder /', () => {
    expect(path.isFolder('my/path/folder///\\')).toBe(true)
})

test('isFile file',() => {
    expect(path.isFile('my/path/file.txt')).toBe(true)
})

test('isFile folder', () => {
    expect(path.isFile('my/path/folder')).toBe(false)
})

test('isFile folder /', () => {
    expect(path.isFile('my/path/folder///\\')).toBe(false)
})
