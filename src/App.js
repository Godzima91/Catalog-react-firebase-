import React, { Component } from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import fire from './config/Firebase'


class App extends Component {
  
  constructor() {
    super();
    this.state = ({
      user: null
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }


  render() {
  
    return (
        <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
}
}

 export default App;
