import axios from "axios";


const APIURL = 'http://127.0.0.1:8000'
export function fetchProducts(){
    return axios(`${APIURL}/list`,{headers:{'Content-Type':'application/json','Authorization': 'Token ' + localStorage.getItem('token')}})
}