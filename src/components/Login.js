import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import fire from '../config/Firebase'
import Loader from '../components/Loader/Loader'

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ 
            [e.target.name]: e.target.value         
        });
    }

  //   submitFormHandler = event => {
  //     event.preventDefault()
  // }

  login(e) {
    e.preventDefault();
    
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }
    

  signup(e){
    e.preventDefault();
    
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    })
    .then((u)=>{console.log(u)})
    
    .catch((error) => {
        console.log(error);
      }) 
  }
  render() {
    return (
       <div className="loginpage_container">
            <form 
                className="formStyle" 
                // onSubmit={this.submitFormHandler}
                >
                  <input 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        type="email" 
                        className="form-control"  
                        placeholder="Enter email"
                        name="email"
                    />
                    <input 
                          value={this.state.password} 
                          onChange={this.handleChange} 
                          type="password" 
                          className="form-control" 
                          placeholder="Password"
                          name="password" 
                    />
                        <div className="btn-container">
                          <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                          <button type="submit" onClick={this.signup} className="btn btn-success">SignUp</button>
                        </div>   
                </form>             
        </div>
    );
  }
}
export default Login;