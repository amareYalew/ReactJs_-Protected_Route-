
import React, { useState, Component } from 'react';



export default function Login(props) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    
    const changeLogInData=(e) => {
       setLoginData({...loginData,[e.target.name]:e.target.value})
    } 


    const authentication={
        isLoggedIn:false,
        onAuthentication(){
          this.isLoggedIn=true;
        },
        getLogInStatus(){
          return this.isLoggedIn;
        }
      }
    const onLogIn = () => {

console.log(loginData)

        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body:JSON.stringify(loginData)
            })
            .then(res => res.json())
            .then(result => {
                props.history.push('/home')
                console.log(result)
                alert('Invalid UserName or PassWord');
                console.log('bbbbb')
                

                // if (result) {
                //     console.log('Helooo')
                //     authentication.onAuthentication();
                //     props.history.push('/home')
                // }
                // else {
                //     alert('Invalid UserName or PassWord');
                // }
            
        })
        
        
    }

    return (
        <div>
            <h2>Welcome to LogIn...</h2>
            <p>
                <label>UserName : <input type="text" value={loginData.username} name="username" onChange={changeLogInData}></input></label>
            </p>
            <p>
                <label>password : <input type="text" name="password" value={loginData.password} onChange={changeLogInData}></input></label>
            </p>
            <button onClick={onLogIn}>Login</button>
        </div>
    )
}
