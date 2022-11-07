
import '../App.css';

import React, { useState } from "react";

// import { Routes, Route } from "react-router-dom";

import { getUser } from "../utilities/users-service";

import AuthPage from '../pages/AuthPage';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
    <AuthPage setUser={setUser}/>
    </div>
  );
}

export default App;
