import { apiClient } from "../client";

export let register = async(values)=>{

    let {firstName,lastName,email,password} = values;
    const res = await apiClient.post('/auth/register',{firstName,lastName,email,password});
    console.log(res.data);
    if(res.data.success){
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

export let login = async(values)=>{

    let {email,password} = values;
    const res = await apiClient.post('/auth/login',{email,password});
    console.log(res.data);
    if(res.data.success){
        return res.data;
    }else{
        throw new Error(res.data.error);
    }
        
}

const authService = {
    register,
    login,
};
export default authService;