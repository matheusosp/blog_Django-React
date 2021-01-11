import axios from "axios";


const APIURL = 'http://127.0.0.1:8000'
export function fetchProducts(){
    return axios(`${APIURL}/list`,{headers:{'Content-Type':'application/json','Authorization': 'Token e2696413687923506eb1def2f1098f1935f94783'}})
}