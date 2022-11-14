import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import List from '../components/List'
//import {getUser} from '../../../backend/controllers/api/userController'
import Trainee from '../components/Trainee'

function HomePage({user, trainee, setTrainee}) {

  const [list, setList] = useState([])
  

  const userList = async () => {
    try {
        const res = await axios({
          method: "GET",
          url: "/api/users",
        })
         const data = res.data.data.data
         //1console.log(data)
         setList(data) 
        //  {console.log(list)}
       
      }catch(e){
        console.log(e)
      }
    }
    useEffect(() => {
      userList()
    },[])

    

           
 
    return (
        <div>
         {user.currentUser?.coach || user.newUser?.coach ? (
        <>
        <h1>Welcome Coach</h1>
        {trainee ? (
        <>
          
          <Trainee setTrainee={setTrainee} trainee={trainee} />
        </>
        ) : (
          <List list={list} setTrainee={setTrainee} trainee={trainee}/>
        )}
              
        </>
    ):(
        <h1>Lets get to work {user.newUser?.name || user.currentUser?.name}</h1>
    )}
   </div>
  )
}

export default HomePage