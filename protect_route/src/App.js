import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import EditProfile from './EditProfile'
import Login from './Login'




const authentication={
  isLoggedIn:false,
  onAuthentication(){
    this.isLoggedIn=true;
  },
  getLogInStatus(){
    return this.isLoggedIn;
  }
}
function SecuredRoute(props){
  return(
    <Route path={props.path} render={data=>authentication.getLogInStatus()?(
      <props.component {...data}></props.component>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Welcome to App Component...</h2>
        <Link to='/'>Login</Link>&nbsp;&nbsp;
      <NavLink to="/home" >Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/edit" >Edit Profile</NavLink>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <SecuredRoute path="/home" component={Home}></SecuredRoute>
          <SecuredRoute path="/edit" component={EditProfile}></SecuredRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
