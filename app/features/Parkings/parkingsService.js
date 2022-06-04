import { apiClient } from "../client";

export let getAllParkings = async()=>{

    const res = await apiClient.get('/parkings/');
    if(res.data.success){
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

export let getRecentlyVisitedParkings = async(userId)=>{

    const res = await apiClient.get(`/parkings/userid/${userId}`);
    if(res.data.success){
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

export let getFavoriteParkings = async(userId)=>{

    const res = await apiClient.get(`/users/favoriteparkings/${userId}`);
    if(res.data.success){
        console.log(res.data);
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

const parkingsService = {
    getAllParkings,
    getRecentlyVisitedParkings,
    getFavoriteParkings,
};
export default parkingsService;