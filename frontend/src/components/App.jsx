
import '../App.css';

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { getUser } from "../utilities/users-service";

import AuthPage from '../pages/AuthPage';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage';
import Navbar from './Navbar';
// import NewWorkoutPage from '../pages/NewWorkoutPage';
// import NewMacroPage from '../pages/NewMacroPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [trainee, setTrainee] = useState(null);
  return (
    <div className="App">
    {user ? (
      <>
      <Navbar setUser={setUser} user={user}/>
      <HomePage user={user} trainee={trainee} setTrainee={setTrainee}/>
      </>
    ):(
      <>
        <Routes>
        <Route path="/" element={<AuthPage setUser={setUser}/>} />
        <Route path="/SignUp" element= {<SignUpPage setUser={setUser}/>} />
        </Routes> 
        
      </>
     
    )}
    
    </div>
  );
}

export default App;


