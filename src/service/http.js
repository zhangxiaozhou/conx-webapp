import {get, post} from './request'
 
export const loginRequest = async (params) => {
 
    const res = await post('/api/conx/user/login', params)  
    return res.data 
}

export const getRefModels = async (params) => {

    const res = await get('/api/conx/project/ref/models', params)
    return res.data
}

export const getCrossSectionByStation = async(params) => {
    const res = await post('/api/conx/project/getCrossSectionByStation', params)
    return res.data
}

export const getVerticalSectionByStation = async(params) => {
    const res = await post('/api/conx/project/getVerticalSectionByStation', params)
    return res.data
}