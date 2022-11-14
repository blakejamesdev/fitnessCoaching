import React from 'react'

import SignIn from '../components/SignIn'

import { Link } from "react-router-dom"

//import SignUpForm from '../components/SignUpForm'

// import { Routes, Route } from "react-router-dom";

function AuthPage({setUser}) {
  return (
    <div className='auth'>
      <h1>Log In Page</h1>
      {/* <SignUpForm setUser={setUser}  /> */}
      <Link to="/SignUp">Sign Up Now!</Link>
      <br />
      <SignIn setUser={setUser} />
    </div>
  )
}

export default AuthPage