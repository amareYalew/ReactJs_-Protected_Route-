import React from 'react'

export default function Home(props) {

    const onNext = () => {
        props.history.replace('/editprofile');
    }
    return (
        <div>
              <h2>Welcome to Home...</h2>  
      <button onClick={onNext}>Next</button>    
        </div>
    )
}
