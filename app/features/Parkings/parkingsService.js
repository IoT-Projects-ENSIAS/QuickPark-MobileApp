import { apiClient } from "../client";

export let getAllParkings = async()=>{

    const res = await apiClient.get('/parkings/');
    if(res.data.success){
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}


const parkingsService = {
    getAllParkings,
};
export default parkingsService;