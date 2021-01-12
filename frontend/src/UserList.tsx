import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
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
    return( 
        <div>
            {lista.map(list => (
                <ListComponent key={list.id} listName={list.name} item={list.item_set}/>
            ))}
        </div>
    );
 }

export default UserList;