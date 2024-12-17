import { media } from "../media";

test('isUri true', () => {
    expect(media.isUri("file:///data/user/0/com.anonymous.GastroGlobe/cache/9de044a9-7f8f-4712-bdab-65ccf799d8c7.jpg")).toBe(true)
 })

 test('isUri false', () => {
    expect(media.isUri("file:data/user/0/com.anonymous.GastroGlobe/cache/9de044a9-7f8f-4712-bdab-65ccf799d8c7.jpg")).toBe(false)
 })

 test('isImage true', () => {
    expect(media.isImage("file:///data/user/0/com.anonymous.GastroGlobe/cache/9de044a9-7f8f-4712-bdab-65ccf799d8c7.jpg")).toBe(true)
 })

 test('isImage false', () => {
    expect(media.isImage("file:data/user/0/com.anonymous.GastroGlobe/cache/9de044a9-7f8f-4712-bdab-65ccf799d8c7.md")).toBe(false)
 })

 test('isVideo true', () => {
    expect(media.isVideo("my_file.mp4")).toBe(true)
 })

 test('isVideo false', () => {
    expect(media.isVideo("my_file.txt")).toBe(false)
 })

 test('isAudio true', () => {
    expect(media.isAudio("my_file.mp3")).toBe(true)
 })

 test('isAudio false', () => {
    expect(media.isAudio("my_file.mp4")).toBe(false)
 })

 test('isText true', () => {
    expect(media.isText("my_file.pdf")).toBe(true)
 })

 test('isText false', () => {
    expect(media.isText("my_file.mp4")).toBe(false)
 })

jest.mock('../../firebase', () => {
    return {
        storage: jest.fn().mockImplementation(() => {
            return null;
        }),
    };
});
jest.mock('react-native-image-picker', () => {
    return {
        launchCamera: jest.fn().mockImplementation(() => {
            return null;
        }),
        launchImageLibrary: jest.fn().mockImplementation(() => {
            return null;
        }),
    };
});
jest.mock('react-native-compressor', () => {
    return {
        Image: jest.fn().mockImplementation(() => {
            return null;
        }),
        Video: jest.fn().mockImplementation(() => {
            return null;
        }),
        Audio: jest.fn().mockImplementation(() => {
            return null;
        }),
    };
});
