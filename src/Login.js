import React from 'react'
import {auth, provider} from './firebase'
import { Button } from '@material-ui/core'
import './Login.css'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const Login = () => {
const signin =()=>{
        //Do Clevel google login shizz....

        const provider = new GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .catch(err=>alert(err.message))
}

  return (
    <div className='login'>
        <div className='login__logo'>
            <img
             src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg" alt="" />
        </div>

        <Button onClick={signin}>Sign In</Button>
    </div>
  )
}

export default Login