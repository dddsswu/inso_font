import axios  from 'axios'
 axios.defaults.baseURL='http://49.235.240.136:3000/'
// axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default async function ajax(url, way, params){
    let med=way||'POST';
    let prm=params||{};
    let sendData={
        url:url,
        method:med,
        data:prm
    }
    console.log(sendData)
    let res=await axios(sendData)
    return res
}


