import React from "react";
import ListComponent from "./ListComponent";

export default class UserList extends React.Component{
    state = {lists: null, loading: true};
    async componentDidMount(){
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Token e2696413687923506eb1def2f1098f1935f94783'
            }
        };
         
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url,config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }

    render(){
        return(
            <div>
                <ListComponent listName={'Minha Lista'}/>
                <ListComponent listName={'Minha Lista 2'}/>
            </div>
        );
    }
    }