import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import File from './file';
import { path } from './path';
import { launchCamera,launchImageLibrary } from 'react-native-image-picker'
import { Image, Video, Audio } from 'react-native-compressor';

// TODO check the Tast from react-native-image-picker for the know when the image is laod to firebase and comebacked to us
// TODO add to feature above the time of the compression Do that with a usestate
class Media{

    static image_extensions = ["jpg","jpeg","jfif","pjpeg","pjp","png","svg"]
    static video_extensions = ["mp4"]
    static audio_extensions = ["mp3"]
    static text_extensions = ["pdf","txt","md"]


    /**
     * Uploads a file to Firebase storage.
     * @param {string} file_uri - The URI of the file to upload.
     * @param {string} path_storage - Optional. The storage path where the file will be saved.
     * @returns {Promise} A Promise that resolves with the storage reference of the uploaded file.
     */
    static async uploadFile(file_uri, path_storage=''){
        try {
            if(this.isImage(file_uri))
                file_uri = await this.compressImage(file_uri)
            else if(this.isAudio(file_uri))
                file_uri = await this.compressAudio(file_uri)
            else if(this.isVideo(file_uri))
                file_uri = await this.compressVideo(file_uri)
            else if(!this.isText(file_uri))
                throw new Error('The file as not been recognise as an Image, Audio, Video or Text')

            // Get the file name
            const basename = path.basename(file_uri)
            let name = File.uniqueName(basename)

            // Handle the save path
            if(path_storage)
                name = path.join(path_storage,name)

            // Get the file content
            const response = await fetch(file_uri);
            const blob = await response.blob();

            // Create the ref of the image
            const storage_ref = ref(storage, name);

            // Write the file in firebase
            await uploadBytes(storage_ref, blob)

            return storage_ref;
        } catch (error) {
            console.error('Error when uploading the file ', error);
            throw error;
        }
    };

    /**
     * Retrieves the download URL for an image stored in Firebase Storage.
     * @param {string} url - The URL of the image in Firebase Storage.
     * @returns {Promise<string>} The download URL of the image.
     * @throws {Error} If an error occurs during the retrieval process.
     */
    static async getImageFireBase(url){
        try{
            return await getDownloadURL(url)
        }catch(error){
            throw error
            switch (error.code) {
                case 'storage/object-not-found':
                // File doesn't exist
                break;
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
                case 'storage/canceled':
                // User canceled the upload
                break;

                // ...

                case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
        }
    }

    /**
     * Retrieves an image from the device's library.
     * @param {object} options - Options for launching the image library.
     * @returns {Promise<string|boolean>} The URI of the selected image or false if the selection was canceled.
     * @throws {Error} If an error occurs during the retrieval process.
     */
    static async getImageLibrary(options={}){
        const response = await launchImageLibrary(options)

        if (response.didCancel) {
            return false
        } else if (response.error) {
            throw response.error
        } else {
            return response
        }
    }

    /**
     * Compresses an image.
     * @param {string} uri - The URI of the image to compress.
     * @param {object} options - Options for image compression.
     * @returns {Promise<void>} A promise indicating the completion of the compression process.
     */
    static async compressImage(uri,options={}){
        if(!this.isUri(uri)){
            options.progressDivider= 10
            options.downloadProgress = (progress) => {
                console.log('downloadProgress: ', progress);
            }
        }

        return await Image.compress(uri, options)
    }

    /**
     * Compresses a video.
     * @param {string} uri - The URI of the video to compress.
     * @param {object} options - Options for video compression.
     * @returns {Promise<void>} A promise indicating the completion of the compression process.
     */
    static async compressVideo(uri,options={}){
        if(!this.isUri(uri)){
            options.progressDivider= 10
            options.downloadProgress = (progress) => {
                console.log('downloadProgress: ', progress);
            }
        }

        return await Video.compress(uri,options,
            (progress) => {
                console.log('Compression Progress: ', progress);
            }
        )
    }

    /**
     * Compresses an audio file.
     * @param {string} uri - The URI of the audio file to compress.
     * @param {object} options - Options for audio compression.
     * @returns {Promise<void>} A promise indicating the completion of the compression process.
     */
    static async compressAudio(uri, options={quality: 'medium'}){
        return await Audio.compress(uri, options) // recommended wav file but can be use mp3 file
    }

    /**
     * Retrieves the supported image file extensions.
     * @returns {string[]} An array of supported image file extensions.
     */
    static getImageExtensions(){
        return this.image_extensions
    }

    /**
     * Retrieves the supported video file extensions.
     * @returns {string[]} An array of supported video file extensions.
     */
    static getVideoExtensions(){
        return this.video_extensions
    }

    /**
     * Retrieves the supported audio file extensions.
     * @returns {string[]} An array of supported audio file extensions.
     */
    static getAudioExtensions(){
        return this.audio_extensions
    }

    /**
     * Retrieves the supported text file extensions.
     * @returns {string[]} An array of supported text file extensions.
     */
    static getTextExtensions(){
        return this.text_extensions
    }

    /**
     * Checks if a URI starts with 'file://'.
     * @param {string} uri - The URI to check.
     * @returns {boolean} True if the URI starts with 'file://', otherwise false.
     */
    static isUri(uri) {
        return uri.startsWith('file://')
    }

    /**
     * Checks if a file is an image based on its path.
     * @param {string} path - The path of the file.
     * @returns {boolean} True if the file is an image, otherwise false.
     */
    static isImage(path){
        [_, extension] = File.getNameAndExtension(path)
        return this.image_extensions.includes(extension.toLowerCase())
    }

    /**
     * Checks if a file is a video based on its path.
     * @param {string} path - The path of the file.
     * @returns {boolean} True if the file is a video, otherwise false.
     */
    static isVideo(path){
        [_, extension] = File.getNameAndExtension(path)
        return this.video_extensions.includes(extension.toLowerCase())
    }

    /**
     * Checks if a file is an audio file based on its path.
     * @param {string} path - The path of the file.
     * @returns {boolean} True if the file is an audio file, otherwise false.
     */
    static isAudio(path){
        [_, extension] = File.getNameAndExtension(path)
        return this.audio_extensions.includes(extension.toLowerCase())
    }

    /**
     * Checks if a file is a text file based on its extension.
     * @param {string} path - The path of the file.
     * @returns {boolean} `true` if the file is a text file, otherwise `false`.
     */
    static isText(path){
        [_, extension] = File.getNameAndExtension(path)
        return this.text_extensions.includes(extension.toLowerCase())
    }
}

export default Media
