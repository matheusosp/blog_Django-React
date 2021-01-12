import React from "react";
import UserList from "./UserList";


export default class LoginComponent extends React.Component{
    state = {
        username:'',
        password:''
    }
    constructor(props: {}) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
    
      handleChange(event: { target: { value: any; }; }) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event: { target: { value: any; }; }) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event: { preventDefault: () => void; }) {
        var url = 'http://127.0.0.1:8000/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => 
                {
                    localStorage.setItem('token', data.token);
                    this.setState({token: data.token});
                }
            );
        event.preventDefault();
      }
    
      render() {
        var token = localStorage.getItem('token');
        if(!token)
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            );
        else
            return <UserList/>
      }    
}