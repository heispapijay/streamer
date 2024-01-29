import axios from "axios"


export const useApiService=()=>{
    const baseUrl = "https://video-tube.onrender.com";
    const get = async(endpoint)=>{
        return await axios.get(`${baseUrl}${endpoint}`);
    }

    const post = async(endpoint, data) =>{
        console.log(`${baseUrl}${endpoint}`);
        return axios.post(`${baseUrl}${endpoint}`, data);
    }

    const patch = async(endpoint, data) =>{
        return await axios.patch(`${baseUrl}${endpoint}`, data);
    }

    // TODO: IMPLEMENT DELETE
    // const del = () =>{
    // }

    return {get, post,  patch,}
}