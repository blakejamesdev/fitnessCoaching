
import '../App.css';

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { getUser } from "../utilities/users-service";

import AuthPage from '../pages/AuthPage';
import SignUpPage from '../pages/SignUpPage';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<AuthPage setUser={setUser}/>} />
      <Route path="/SignUp" element= {<SignUpPage />} />
    </Routes>
    </div>
  );
}

export default App;


