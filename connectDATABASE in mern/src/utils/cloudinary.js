import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath) return null
        //upload file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        } )
        // file has been uploded successfull
        console.log("file is uploaded on cloudinary",
            response.url);
            return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

cloudinary.v2.uploder.upload(
{ public_id: "olympic_flag"},
function(error, result) {console.log(result); });

export {uploadOnCloudinary}