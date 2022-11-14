import React from 'react'
import * as userService from "./../utilities/users-service";
import { Link } from "react-router-dom"

function Navbar({user, setUser}) {
  


    // console.log(user)
    const handleLogOut = () => {
        // Call the logout function
        userService.logOut();
    
        // Set the user back to null
        setUser(null);
        window.location.reload()
      };
  return (
    <>
    <div>Welcome {user.newUser?.name || user.currentUser?.name}</div>
    <Link to="/"onClick={() => {
              return handleLogOut();
            }} > Log Out</Link>
    </>
    

  )
}

export default Navbar