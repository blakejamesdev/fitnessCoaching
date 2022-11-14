import axios from 'axios'
import React, {useState, useEffect} from 'react'

function NewMacroPage({trainee, setTrainee}) {
const [owner, setOwner]= useState("")
const [calories, setCalories]= useState("")
const [protein, setProtein]= useState("")
const [carbs, setCarbs]= useState("")
const [fats, setFats]= useState("")
// const [refresh, setRefresh]= useState([])
useEffect(()=>{
  setOwner(trainee._id)
 
},[trainee._id])
const handleCaloriesChange =(e) => {
  setCalories(e.target.value);
}
const handleProteinChange =(e) => {
  setProtein(e.target.value);
}
const handleCarbsChange =(e) => {
  setCarbs(e.target.value);
}
const handleFatsChange =(e) => {
  setFats(e.target.value);
}
const handleOwnerChange =(e) => {
  setOwner(e.target.value);
}
const handleFormSubmission =async (e) => {
  e.preventDefault();
  // console.log(trainee._id)
  // setOwner(trainee._id)
  const state ={owner, calories, protein, carbs, fats}
  
  try{
    const res = await axios({
      method: "POST",
      url:"/api/macro",
      data: state
    })
    console.log(res)
    localStorage.setItem("trainee", JSON.stringify(trainee))
    window.location.reload(false);
    setTrainee(JSON.parse(localStorage.getItem("trainee")))
    setTrainee(trainee)
  }catch(e){
    console.log(e)
  }
}
  return (
    <div className='form'>Add Macros
         <form 
         action="/api/macro" 
         method="POST" 
         onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
        >
           <span>Owner (Do not change!):
             <input type="text" 
             name="owner" 
             defaultValue={trainee._id}
             required 
             onChange={(e) => {
              return handleOwnerChange(e)}}
              /> 
              </span> 
            <br />
            Calories: <input type="text" name="calories" required onChange={(e) => {
              return handleCaloriesChange(e)}}/>
            <br />
            Protein: <input type="text" name="protein" required onChange={(e) => {
              return handleProteinChange(e)}}/>
            <br />
            Carbs: <input type="text" name="carbs" required onChange={(e) => {
              return handleCarbsChange(e)}}/>
            <br />
            Fats: <input type="text" name="fats" required onChange={(e) => {
              return handleFatsChange(e)}}/>
            <br />
            <input type="submit" name="" value="Create New Macros" />
          </form>

    </div>
  )
}

export default NewMacroPage