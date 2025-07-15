
import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosinstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    //append image file to form data

    formData.append('image', imageFile); 

    try{
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAP_iMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // set header for file upload
            },
        });

        return response.data; // return response data
    }catch (error) {
        console.error("Image upload failed", error);
        throw error; // rethrow error for handling in calling function

    }
};

export default uploadImage;