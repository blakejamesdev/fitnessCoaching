// IMPORT REACT
import React from "react";
import { useState } from "react";

// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";

// CREATE COMPONENT
const SignIn = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });

      // Add the user to state
      setUser(user.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <h1>Login Form</h1>
        <form autoComplete="off">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => {
              return handleInputChange(e);
            }}
            value={email}
          /><br/>
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => {
              return handleInputChange(e);
            }}
            value={password}
          /><br/>
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

// EXPORT COMPONENT
export default SignIn;