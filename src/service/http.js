import {get, post} from './request'
 
export const loginRequest = async (params) => {

    console.log('login params:' + param )
    
    const res = await get('api/user/login', params)
    // return res.data

    return res.data
    console.log(res)
}