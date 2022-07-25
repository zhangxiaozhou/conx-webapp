import {get, post} from './request'
 
export const loginRequest = async (params) => {
 
    const res = await post('api/conx/user/login', params)  
    return res.data 
}