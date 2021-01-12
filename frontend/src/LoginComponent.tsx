import React from "react";


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
        alert('A name was submitted: ' + this.state.username + "Password: " + this.state.password);
        event.preventDefault();
      }
    
      render() {
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
      }    
}