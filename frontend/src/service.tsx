import axios from "axios";


const APIURL = 'http://127.0.0.1:8000'
export function fetchProducts(){
    return axios(`${APIURL}/list`,{headers:{'Content-Type':'application/json','Authorization': 'Token 6b46e0c37a24b3d546c33c322a29e32dffd97755'}})
}