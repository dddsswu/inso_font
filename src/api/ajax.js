import axios  from 'axios'
import qs from 'qs';
import URL from './url.js'
// axios.defaults.baseURL='http://49.235.240.136:3000/'
 axios.defaults.baseURL = URL();

export default async function ajax(url, way, params){
    let med=way||'POST';
    let prm=params||{};
    let sendData={
        url:url,
        method:med,
        data:qs.stringify(prm),
        headers:{
            'Content-type': 'application/x-www-form-urlencoded'
            },
    }
    console.log(sendData)
    let res=await axios(sendData)
    return res
}


