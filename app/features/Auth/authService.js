import { apiClient } from "../client";
import AsyncStorage from "@react-native-async-storage/async-storage";
export let register = async(values)=>{

    let {firstName,lastName,email,password} = values;
    const res = await apiClient.post('/auth/register',{firstName,lastName,email,password});
    if(res.data.success){
        console.log(res.data);
        await AsyncStorage.setItem("quickPark_user",res.data.data);
        return res.data.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

export let login = async(values)=>{

    let {username,password} = values;
    const res = await apiClient.post('/auth/login',{email:username,password});
    if(res.data.success){
        await AsyncStorage.setItem("quickPark_user",res.data.data.email);
        return res.data.data.email;
    }else{
        throw new Error(res.data.error);
    }
        
}

export let checkLogin = async()=>{

    const response = await AsyncStorage.getItem("quickPark_user");
    return response;
        
}

export let logout = async()=>{
    await AsyncStorage.removeItem("quickPark_user");
    return;
}

const authService = {
    register,
    login,
    checkLogin,
    logout,
};
export default authService;