import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";
import { fetchProducts } from "./service";
import { List } from "./types";


function UserList() {

    const [lista, setList] = useState<List[]>([]);
    useEffect(() => {
        fetchProducts()
        .then(response => setList(response.data))
        .catch(() => {
         console.log('error')
        })
   },[])
    var token = '';

    if(token===''){
        return <LoginComponent/>
    }
    return( 
        <div>
            {lista.map(list => (
                <ListComponent key={list.id} listName={list.name} item={list.item_set}/>
            ))}
        </div>
    );
 }

export default UserList;