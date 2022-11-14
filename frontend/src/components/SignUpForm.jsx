// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
import { signUp } from "../utilities/users-service";

// CREATE COMPONENT
const SignUpForm = ({ setUser }) => {
  // Create different state for the signup component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [age, setAge] = useState("")
  const [natural, setNatural] = useState(false)
  const [male, setMale] = useState(false)
  const [coach, setCoach] = useState(false)

  // Assuming the passed in password is not equal to the password confirm
  const disable = password !== confirm;

  // Create a handle change method to keep track of changes inside the form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleNaturalChange = () => {
    setNatural(current =>!current);
  };
  const handleMaleChange = () => {
    setMale(current =>!current);
  };
  const handleCoachChange = () => {
    setCoach(current =>!current);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = { name, email, password, confirm, error, age, natural, male, coach};
    //console.log(state)
    try {
      // Make a copy of our data
      const formData = { ...state };

      delete formData["confirm"];
      delete formData["error"];
      //console.log(formData)
      // Send the data to our backend
      const user = await signUp(formData);

      // Log the data to the console
     // console.log(user);
      setUser(user.data);
    } catch (error) {
      setError("Sign Up Failed - Try Again");
      console.log(error)
    }
  };
  // Reder component
  return (
    <div className="form-container">
    <div className="signup">
      <h1>Sign Up Form</h1>
      
        <form
          autoComplete="off"
          onSubmit={(e) => {
            return handleFormSubmission(e);
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              return handleNameChange(e);
            }}
            value={name}
            required
          /><br/>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              return handleEmailChange(e);
            }}
            value={email}
            required
          /><br/>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              return handlePasswordChange(e);
            }}
            value={password}
            required
          /><br/>
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            onChange={(e) => {
              return handleConfirmChange(e);
            }}
            value={confirm}
            required
          /><br/>
          <label>Age</label>
          <input 
          type="text" 
          name="age"
          value={age}
          onChange={(e) => {
            return handleAgeChange(e);
          }}/><br/>
          <label>Are you Natural?</label>
          <input 
          type="checkbox"
          name="natural"
          value={natural}
          onChange={() => {
            return handleNaturalChange();
          }}/><br/>
          <label>Were You Born Male</label>
          <input 
          type="checkbox"
          name="male"
          value={male}
          onChange={() => {
            return handleMaleChange();
          }}/><br/>
          <label>Are you a Coach?</label>
          <input 
          type="checkbox"
          name="coach"
          value={coach}
          onChange={() => {
            return handleCoachChange();
          }}/><br/>

          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

// EXPORT COMPONENT
export default SignUpForm;
