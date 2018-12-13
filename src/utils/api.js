import axios from 'axios';
import { API_BASE_URL } from 'const';

export default ({ url, method, params, data })=>{
    // const token = localStorage.getItem("userToken")    
    // axios.defaults.headers.common['Bearer'] = token;
    return axios({
        baseURL: API_BASE_URL,
        method: method,
        url: url,
        data: data,
        params: params
    })
};